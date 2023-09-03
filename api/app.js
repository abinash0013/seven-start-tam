const express = require("express")
// const app = express.Router();
const { con } = require('./sqlConfig/connection');
var bodyParser = require('body-parser')

var app = express();
var cors = require('cors');
const ResponseHandler = require("./utils/responseHelper");
app.use(cors("*"))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const ex_query = (sql, req, res, fields) => {
  con.query(sql, [req.body.userName, req.body.password],
    function (error, result, fields) {
      if (error) throw error;
      console.log(result);
      if (error) {
        res.status(400).send('Error in database operation');
      } else {
        res.send(result);
      }
    });
}

// app.get('/list', (req, res) => {
//   ex_query("SELECT * FROM tbl_users", req, res)
// })

// app.post('/users-add', (req, res) => {
//   // const values = ex_query("INSERT INTO `tbl_users`(`name`, `email`, `phone`, `gender`) VALUES (?)", req, res);
//   ex_query("INSERT INTO `tbl_users`(`name`, `email`, `phone`, `gender`) VALUES (?)", req, res);
//   const values = [
//     req.body.name,
//     req.body.email,
//     req.body.phone,
//     req.body.gender
//   ]
//   // console.log("resulttttt");
//   console.log("resultttt", values);
//   res.send(values);
// })

// ::::::::::::::::::::::::::::::::::::::::: admin api code
app.post("/adminLogin", async (req, res) => {
  // console.log("reqbody", req.body.password);
  con.query('SELECT * FROM `tbl_admin` Where `admin_username`=? And `admin_password`=?',
    [req.body.userName, req.body.password],
    function (error, result, fields) {
      if (error) throw error;
      console.log(result);
      if (error) {
        ResponseHandler(res, false, "Api issue", result)
      } else {
        if (result.length > 0) {
          ResponseHandler(res, true, "Login Successful", result)
        } else {
          ResponseHandler(res, false, "Login Faild", result)
        }
      }
    });
})

// ::::::::::::::::::::::::::::::::::::::::: agents api code
app.get('/agentsList', async (req, res) => {
  ex_query("SELECT * FROM tbl_agents", req, res)
})

app.post('/saveAgent', async (req, res) => {
  con.query('INSERT INTO `tbl_agents` SET `agents_name`=?, `agents_email`=?, `agents_phone`=?, `agents_gender`=?',
    [req.body.name, req.body.email, req.body.phone, req.body.gender],
    function (error, result, fields) {
      if (error) throw error;
      if (error) {
        ResponseHandler(res, false, "Api Issue", result)
      } else {
        if (result) {
          ResponseHandler(res, true, "Save Successfully..", result)
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Save..", result)
        }
      }
    });
})

app.put('/editAgent', async (req, res) => {
  con.query('UPDATE `tbl_agents` SET  `agents_name`=?, `agents_email`=?, `agents_phone`=?, `agents_gender`=? WHERE `agents_id`=?',
    [req.body.name, req.body.email, req.body.phone, req.body.gender, req.body.id],
    function (error, result, fields) {
      if (error) throw error;
      console.log("pppp", result);
      if (error) {
        ResponseHandler(res, false, "Api Issue", result)
      } else {
        if (result) {
          ResponseHandler(res, true, "Update Successfully..", result)
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Update..", result)
        }
      }
    });
})

app.put('/deleteAgent', async (req, res) => {
  con.query('UPDATE `tbl_agents` SET `agents_active_status`=? WHERE `agents_id`=?',
    [req.body.status, req.body.id],
    function (error, result, fields) {
      if (error) throw error;
      if (error) {
        ResponseHandler(res, false, "Api Issue", result)
      } else {
        if (result) {
          ResponseHandler(res, true, "Deleted Successfully..", result)
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Deleted..", result)
        }
      }
    }
  );
})

// ::::::::::::::::::::::::::::::::::::::::: users api code
app.get('/usersList', async (req, res) => {
  ex_query("SELECT * FROM tbl_users", req, res)
})

app.post('/saveUser', async (req, res) => {
  con.query('INSERT INTO `tbl_users` SET `users_name`=?, `users_email`=?, `users_phone`=?, `users_gender`=?',
    [req.body.name, req.body.email, req.body.phone, req.body.gender],
    function (error, result, fields) {
      if (error) throw error;
      if (error) {
        ResponseHandler(res, false, "Api Issue", result)
      } else {
        if (result) {
          ResponseHandler(res, true, "Save Successfully..", result)
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Save..", result)
        }
      }
    });
})

app.put('/editUser', async (req, res) => {
  con.query('UPDATE `tbl_users` SET  `users_name`=?, `users_email`=?, `users_phone`=?, `users_gender`=? WHERE `users_id`=?',
    [req.body.name, req.body.email, req.body.phone, req.body.gender, req.body.id],
    function (error, result, fields) {
      if (error) throw error;
      console.log("pppp", result);
      if (error) {
        ResponseHandler(res, false, "Api Issue", result)
      } else {
        if (result) {
          ResponseHandler(res, true, "Update Successfully..", result)
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Update..", result)
        }
      }
    });
})

app.put('/deleteUser', async (req, res) => {
  con.query('UPDATE `tbl_users` SET `users_active_status`=? WHERE `users_id`=?',
    [req.body.status, req.body.id],
    function (error, result, fields) {
      if (error) throw error;
      if (error) {
        ResponseHandler(res, false, "Api Issue", result);
      } else {
        if (result) {
          ResponseHandler(res, true, "Deleted Successfully..", result);
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Deleted", result);
        }
      }
    }
  )
})

// ::::::::::::::::::::::::::::::::::::::::: ticket api code
app.get('/ticketList', async (req, res) => {
  ex_query("SELECT * FROM tbl_ticket", req, res)
})

app.post('/saveTicket', async (req, res) => {
  con.query('INSERT INTO `tbl_ticket` SET `ticket_serial_number`=?, `ticket_number`=?, `ticket_amount`=?, `ticket_status`=?',
    [req.body.ticketSerialNumber, req.body.ticketNumber, req.body.ticketAmount, req.body.ticketStatus],
    function (error, result, fields) {
      if (error) throw error;
      if (error) {
        ResponseHandler(res, false, "Api Issue", result)
      } else {
        if (result) {
          ResponseHandler(res, true, "Save Successfully..", result)
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Save..", result)
        }
      }
    });
})

app.put('/editTicket', async (req, res) => {
  con.query('UPDATE `tbl_ticket` SET `ticket_serial_number`=?, `ticket_number`=?, `ticket_amount`=?, `ticket_status`=? WHERE `ticket_id`=?',
    [req.body.ticketSerialNumber, req.body.ticketNumber, req.body.ticketAmount, req.body.ticketStatus, req.body.id],
    function (error, result, fields) {
      if (error) throw error;
      console.log("pppp", result);
      if (error) {
        ResponseHandler(res, false, "Api Issue", result)
      } else {
        if (result) {
          ResponseHandler(res, true, "Update Successfully..", result)
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Update..", result)
        }
      }
    });
})

app.put('/deleteTicket', async (req, res) => {
  con.query('UPDATE `tbl_ticket` SET `ticket_status`=? WHERE `ticket_id`=?',
    [req.body.status, req.body.id],
    function (error, result, fields) {
      if (error) throw error;
      if (error) {
        ResponseHandler(res, false, "Api Issue", result);
      } else {
        if (result) {
          ResponseHandler(res, true, "Deleted Successfully..", result);
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Deleted", result);
        }
      }
    }
  )
})

app.get('/ticketCardView', async (req, res) => {
  ex_query('SELECT * FROM `tbl_ticket` WHERE `game_id`=2', req, res)
  // ex_query('SELECT * FROM `tbl_ticket`', req, res)
  //   function (error, result, fields) {
  //     if (error) throw error;
  //     console.log("pppp", result);
  //     if (error) {
  //       ResponseHandler(res, false, "Api Issue", result)
  //     } else {
  //       if (result) {
  //         ResponseHandler(res, true, "Update Successfully..", result)
  //       } else {
  //         ResponseHandler(res, false, "Sorry., Unable to Update..", result)
  //       }
  //     }
  // });
})

app.post('/addTicket', async (req, res) => {
  let mainArr = [];
  for (i = 1; i <= 10; i++) {
    let arr = [];
    for (j = 1; j <= 27; j++) {
      let x = Math.floor(Math.random() * 99);
      let y = Math.floor(Math.random() * 3);
      if (y === 0 || x == 0) {
        arr.push({ status: false, number: 0, line: j < 10 ? 'top' : j > 9 && j < 18 ? "middle" : "bottom" });
      } else {
        arr.push({ status: false, number: x, line: j < 10 ? 'top' : j > 9 && j < 18 ? "middle" : "bottom" })
      }
    }
    let gameId = 1;
    let jsonset = {
      id: i,
      gameId: gameId,
      agentId: "",
      userName: "",
      userPhone: "",
      ticketUniquieId: gameId + "" + i + new Date().getTime(),
      bookingDateAndTime: new Date().getTime(),
      dateSet: arr
    }
    mainArr.push(jsonset);
  }
  con.query('INSERT INTO `tbl_ticket` SET `game_id`=?,`ticket_set`=?', [req.body.gameId, JSON.stringify(mainArr)],
    // console.log(mainArr)
    function (error, result, fields) {
      if (error) throw error;
      console.log("pppp", result);
      if (error) {
        ResponseHandler(res, false, "Api Issue", result)
      } else {
        if (result) {
          ResponseHandler(res, true, "Update Successfully..", result)
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Update..", result)
        }
      }
    });
})

// ::::::::::::::::::::::::::::::::::::::::: ticket api code
app.get('/gameList', async (req, res) => {
  ex_query("SELECT * FROM tbl_game", req, res)
})

app.post('/saveGame', async (req, res) => {
  const numbersWithStatus = Array.from({ length: 100 }, (_, i) => ({
    number: i + 1,
    status: 'false'
  }));
  const numberSetJsonString = JSON.stringify(numbersWithStatus, null, 2); // The third argument is for pretty formatting (2 spaces for indentation)
  // console.log("numbersrrrjsonString", numberSetJsonString);
  con.query('INSERT INTO `tbl_game` SET `game_name`=?, `game_start_date`=?, `game_start_time`=?, `game_maximum_ticket_sell`=?, `game_number_set`=?, `game_amount`=?, `game_quick_fire`=?, `game_star`=?, `game_top_line`=?, `game_middle_line`=?, `game_bottom_line`=?, `game_corner`=?, `game_half_sheet`=?, `game_housefull`=?, `game_status`=?',
    [req.body.gameName, req.body.gameStartDate, req.body.gameStartTime, req.body.gameMaximumTicketSell, numberSetJsonString.toString(), req.body.gameAmount, req.body.gameQuickFire, req.body.gameStar, req.body.gameTopLine, req.body.gameMiddleLine, req.body.gameBottomLine, req.body.gameCorner, req.body.gameHalfSheet, req.body.gameHousefull, req.body.gameStatus],
    function (error, result, fields) {
      if (error) throw error;
      if (error) {
        ResponseHandler(res, false, "Api Issue", result)
      } else {
        if (result) {
          ResponseHandler(res, true, "Save Successfully..", result)
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Save..", result)
        }
      }
    });
})

app.get('/getNumberOneToHundredForCalling', async (req, res) => {
  ex_query('SELECT * FROM `tbl_game` WHERE `game_id`=8', req, res)
})

app.post('/countDownStartForLiveGame', async (req, res) => {
  // Function to generate and log a random number from 1 to 100
  // Function to generate a random number between min and max (inclusive)
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Array to store unique random numbers
  const uniqueRandomNumbers = [];

  // Function to generate and log unique random numbers
  function generateUniqueRandomNumber() {
    if (uniqueRandomNumbers.length < 100) {
      let randomNumber;
      do {
        randomNumber = getRandomNumber(1, 100);
      } while (uniqueRandomNumbers.includes(randomNumber));

      uniqueRandomNumbers.push(randomNumber);
      console.log(randomNumber);
    } else {
      clearInterval(interval); // Stop the timer when 100 unique numbers are generated
      console.log("Timer stopped.");
    }
  }

  // Set a timer to call the function every 100 milliseconds
  const interval = setInterval(generateUniqueRandomNumber, 10000);
})

app.post('/matchedTicketForBooking', async (req, res) => {
  const currentDate = new Date();
  // Extracting Date Components
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
  const day = currentDate.getDate();

  // Extracting Time Components
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const milliseconds = currentDate.getMilliseconds();

  const fullDate = `${year}-${month > 9 ? month : `0` + month}-${day > 9 ? day : `0` + day}`
  const fullTime = `${hours}:${minutes}`
  console.log("Date & Time:", fullDate, fullTime);

  con.query('SELECT `game_id`,`game_number_set` FROM `tbl_game` WHERE game_start_date=? AND game_start_time < ?',
    [fullDate, fullTime],
    // date_ob = new Date()

    function (error, result, fields) {
      if (error) throw error;
      //  console.log("pppp", result);
      if (error) {
        ResponseHandler(res, false, "Api Issue", result)
      } else {
        if (result) {
          let numberData = result.data;
          console.log(numberData[0])
          // function getRandomNumber(min, max) {
          //   return Math.floor(Math.random() * (max - min + 1)) + min;
          // }

          // // Array to store unique random numbers
          // const uniqueRandomNumbers = [];

          // // Function to generate and log unique random numbers
          // let randomNumber;
          // function generateUniqueRandomNumber() {
          //   if (uniqueRandomNumbers.length < 100) {
          //     do {
          //       randomNumber = getRandomNumber(1, 100);
          //     } while (uniqueRandomNumbers.includes(randomNumber));

          //     uniqueRandomNumbers.push(randomNumber);
          //     console.log(randomNumber);
          //     numberData.map((item, index) => {
          //       if (item.number == randomNumber) {
          //         item.status == "true";
          //       }
          //     })

          //     /////update api call/////////
          //   } else {
          //     clearInterval(interval); // Stop the timer when 100 unique numbers are generated
          //     console.log("Timer stopped.");
          //   }
          // }

          // // Set a timer to call the function every 100 milliseconds
          // const interval = setInterval(generateUniqueRandomNumber, 10000);


          ResponseHandler(res, true, "Successfully..", result)
        } else {
          ResponseHandler(res, false, "Sorry., Unable to..", result)
        }
      }
    });
})

app.put('/editGame', async (req, res) => {
  con.query('UPDATE `tbl_game` SET `game_name`=?, `game_start_date`=?, `game_start_time`=?, `game_maximum_ticket_sell`=?, `game_amount`=?, `game_quick_fire`=?, `game_star`=?, `game_top_line`=?, `game_middle_line`=?, `game_bottom_line`=?, `game_corner`=?, `game_half_sheet`=?, `game_housefull`=?, `game_status`=? WHERE `game_id`=?',
    [req.body.gameName, req.body.gameStartDate, req.body.gameStartTime, req.body.gameMaximumTicketSell, req.body.gameAmount, req.body.gameQuickFire, req.body.gameStar, req.body.gameTopLine, req.body.gameMiddleLine, req.body.gameBottomLine, req.body.gameCorner, req.body.gameHalfSheet, req.body.gameHousefull, req.body.gameStatus, req.body.gameId],
    function (error, result, fields) {
      if (error) throw error;
      console.log("pppp", result);
      if (error) {
        ResponseHandler(res, false, "Api Issue", result)
      } else {
        if (result) {
          ResponseHandler(res, true, "Update Successfully..", result)
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Update..", result)
        }
      }
    });
})

app.put('/deleteGame', async (req, res) => {
  con.query('UPDATE `tbl_game` SET `game_status`=? WHERE `game_id`=?',
    [req.body.gameStatus, req.body.gameId],
    function (error, result, fields) {
      if (error) throw error;
      if (error) {
        ResponseHandler(res, false, "Api Issue", result);
      } else {
        if (result) {
          ResponseHandler(res, true, "Deleted Successfully..", result);
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Deleted", result);
        }
      }
    }
  )
})

// ::::::::::::::::::::::::::::::::::::::::: announcement api code
app.get('/announcementList', async (req, res) => {
  ex_query("SELECT * FROM tbl_announcement", req, res)
})

app.post('/saveAnnouncement', async (req, res) => {
  con.query('INSERT INTO `tbl_announcement` SET `announcement_title`=?, `announcement_message`=?, `announcement_status`=?',
    [req.body.announcementTitle, req.body.announcementMessage, req.body.announcementStatus],
    function (error, result, fields) {
      if (error) throw error;
      if (error) {
        ResponseHandler(res, false, "Api Issue", result)
      } else {
        if (result) {
          ResponseHandler(res, true, "Save Successfully..", result)
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Save..", result)
        }
      }
    });
})

app.put('/editAnnouncement', async (req, res) => {
  con.query('UPDATE `tbl_announcement` SET `announcement_title`=?, `announcement_message`=?, `announcement_status`=? WHERE `announcement_id`=?',
    [req.body.announcementTitle, req.body.announcementMessage, req.body.announcementStatus, req.body.announcementId],
    function (error, result, fields) {
      if (error) throw error;
      console.log("pppp", result);
      if (error) {
        ResponseHandler(res, false, "Api Issue", result)
      } else {
        if (result) {
          ResponseHandler(res, true, "Update Successfully..", result)
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Update..", result)
        }
      }
    });
})

app.put('/deleteAnnouncement', async (req, res) => {
  con.query('UPDATE `tbl_announcement` SET `announcement_status`=? WHERE `announcement_id`=?',
    [req.body.announcementStatus, req.body.announcementId],
    function (error, result, fields) {
      if (error) throw error;
      if (error) {
        ResponseHandler(res, false, "Api Issue", result);
      } else {
        if (result) {
          ResponseHandler(res, true, "Deleted Successfully..", result);
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Deleted", result);
        }
      }
    }
  )
})

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: //
// ::::::::::::::::::::::::::::::::::::: || agents api || :::::::::::::::::::::::::::::::::::::: // 
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: //

// ::::::::::::::::::::::::::::::::::::: viewTicketForAgents
app.post('/viewTicketForAgents', async (req, res) => {
  con.query("SELECT * FROM tbl_ticket WHERE game_id=?", [req.body.gameId],
    function (error, result, fields) {
      if (error) throw error;
      if (error) {
        ResponseHandler(res, false, "Api Issue", result);
      } else {
        if (result) {
          ResponseHandler(res, true, "Fetch Successfully..", result);
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Deleted", result);
        }
      }
    }
  )
})

app.put('/bookTicketByAgents', async (req, res) => {
  con.query('UPDATE `tbl_ticket` SET `ticket_set`=? WHERE `game_id`=?',
    [req.body.ticketSet, req.body.gameId],
    function (error, result, fields) {
      if (error) throw error;
      if (error) {
        ResponseHandler(res, false, "Api Issue", result);
      } else {
        if (result) {
          ResponseHandler(res, true, "Ticket Booked Successfully..", result);
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Booked Ticket", result);
        }
      }
    }
  )
})

// ::::::::::::::::::::::::::::::::::::: bookTicketByAgentsForUser
// app.put  ('/bookTicketByAgentsForUser', async (req, res)=>{
//   con.query('')
// })


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: website api
// app.get('/ticketCardView', async (req, res) => {
//   ex_query("SELECT * FROM tbl_ticket", req, res)
// })

app.listen(3000, function () {
  console.log('Server is up and Rudding on port 3000!');
});