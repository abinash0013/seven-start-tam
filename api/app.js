var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://sevenstarttambola-default-rtdb.firebaseio.com"
});

var db = firebase.database();
var ref = db.ref('game')

// var userRef = ref.child('gameSet')

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

// ::::::::::::::::::::::::::::::::::::::::: admin api code // not working for now let us see at the end
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

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: //
// ::::::::::::::::::::::::::::::::::::::: || aadmin || :::::::::::::::::::::::::::::::::::::::: //
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: //


// ::::::::::::::::::::::::::::::::::::::::: Agents List
app.get('/agentsList', async (req, res) => {
  ex_query("SELECT * FROM tbl_agents", req, res)
})

// ::::::::::::::::::::::::::::::::::::::::: Save Agent
app.post('/saveAgent', async (req, res) => {
  con.query('INSERT INTO `tbl_agents` SET `agents_name`=?, `agents_email`=?, `agents_phone`=?,`agents_password`=?, `agents_gender`=?,`agents_active_status`=?',
    [req.body.name, req.body.email, req.body.phone, req.body.password, req.body.gender, req.body.status],
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

// ::::::::::::::::::::::::::::::::::::::::: Edit Agent
app.put('/editAgent', async (req, res) => {
  con.query('UPDATE `tbl_agents` SET  `agents_name`=?, `agents_email`=?, `agents_phone`=?, `agents_gender`=?,`agents_active_status`=?  WHERE `agents_id`=?',
    [req.body.name, req.body.email, req.body.phone, req.body.gender, req.body.status, req.body.id],
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

// ::::::::::::::::::::::::::::::::::::::::: Delete Agent
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

// ::::::::::::::::::::::::::::::::::::::::: Users List
app.get('/usersList', async (req, res) => {
  ex_query("SELECT * FROM tbl_users", req, res)
})

// ::::::::::::::::::::::::::::::::::::::::: Save User
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

// ::::::::::::::::::::::::::::::::::::::::: Edit User
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

// ::::::::::::::::::::::::::::::::::::::::: Delete User
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

// ::::::::::::::::::::::::::::::::::::::::: Tickets List // this api because dynamic ticket created when game created

app.get('/gameList', async (req, res) => {
  ex_query("SELECT * FROM tbl_game", req, res)
})

app.post('/ticketList', async (req, res) => {
  // con.query("SELECT * FROM tbl_ticket WHERE game_id=?", [req.body.gameId],
  con.query("SELECT * FROM tbl_game WHERE game_id=?", [req.body.gameId],
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

// ::::::::::::::::::::::::::::::::::::::::: Save Tickets
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

// ::::::::::::::::::::::::::::::::::::::::: Edit Tickets
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

// ::::::::::::::::::::::::::::::::::::::::: Delete Tickets
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

// ::::::::::::::::::::::::::::::::::::::::: Tickets Card View according to created Game id
app.post('/ticketCardView', async (req, res) => {
  // ex_query('SELECT * FROM `tbl_ticket` WHERE `game_id`=9', req, res)
  con.query('SELECT * FROM `tbl_game` WHERE `game_id`=?', [req.body.gameId],
    function (error, result, fields) {
      if (error) throw error;
      if (error) {
        ResponseHandler(res, false, "Api Issue", result);
      } else {
        if (result) {
          ResponseHandler(res, true, "Successfully..", result);
        } else {
          ResponseHandler(res, false, "Sorry., Unable to Deleted", result);
        }
      }
    }
  )
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

// ::::::::::::::::::::::::::::::::::::::::: Game List
app.get('/gameList', async (req, res) => {
  ex_query("SELECT * FROM tbl_game", req, res)
})

// ::::::::::::::::::::::::::::::::::::::::: Save Game

function generateTambolaTicket() {
  // Initialize an empty ticket
  const numberArr = [];
  const ticket = [];

  // Generate three rows with nine numbers each
  for (let i = 0; i < 3; i++) {
    const row = [];

    // Generate nine unique random numbers for each row
    while (row.length < 9) {
      const randomNumber = getRandomNumber(1, 99); // Assuming Tambola numbers range from 1 to 90
      if (!row.includes(randomNumber)) {
        row.push({
          status: false,
          number: randomNumber,
          line: i == 0 ? 'top' : i == 1 ? "middle" : "bottom"
        }
        );
      }
    }
    let arr = []
    while (arr.length < 4) {
      var r = Math.floor(Math.random() * 8) + 1;
      if (arr.indexOf(r) === -1)
        arr.push(r)
    }
    for (let i = 0; i < arr.length; i++) {
      row[arr[i]].number = 0
    }
    ticket.push(row);
    for (let j = 0; j < 9; j++) {
      numberArr.push(ticket[i][j])
    }
  }

  return numberArr;
}

// Function to get a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.post('/saveGame', async (req, res) => {
  let gameId = "";
  con.query("SELECT * FROM tbl_game", [req.body.userName, req.body.password],
    function (error, result, fields) {
      if (error) throw error;
      let resultLength = result.length
      gameId = result[resultLength - 1].game_id + 1
      let mainArr = [];
      for (i = 1; i <= 5; i++) {
        let jsonset = {
          id: i,
          gameId: gameId,
          agentId: "",
          userName: "",
          userPhone: "",
          ticketUniquieId: gameId + "" + i + new Date().getTime(),
          bookingDateAndTime: new Date().getTime(),
          dateSet: generateTambolaTicket()
        }
        mainArr.push(jsonset);
      }
      const numbersWithStatus = Array.from({ length: 100 }, (_, i) => ({
        number: i + 1,
        status: 'false'
      }));
      const numberSetJsonString = JSON.stringify(numbersWithStatus, null, 2); // The third argument is for pretty formatting (2 spaces for indentation)
      // console.log("numbersrrrjsonString", numberSetJsonString);
      con.query('INSERT INTO `tbl_game` SET `game_name`=?, `game_start_date`=?, `game_start_time`=?, `game_maximum_ticket_sell`=?, `game_number_set`=?, `game_amount`=?, `game_quick_fire`=?, `game_star`=?, `game_top_line`=?, `game_middle_line`=?, `game_bottom_line`=?, `game_corner`=?, `game_half_sheet`=?, `game_housefull`=?, `game_status`=?,`ticket_set`=?',
        [req.body.gameName, req.body.gameStartDate, req.body.gameStartTime, req.body.gameMaximumTicketSell, numberSetJsonString.toString(), req.body.gameAmount, req.body.gameQuickFire, req.body.gameStar, req.body.gameTopLine, req.body.gameMiddleLine, req.body.gameBottomLine, req.body.gameCorner, req.body.gameHalfSheet, req.body.gameHousefull, req.body.gameStatus, JSON.stringify(mainArr)],
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
    }
  )
})

// ::::::::::::::::::::::::::::::::::::::::: Get Number For Calling
app.get('/getNumberOneToHundredForCalling', async (req, res) => {
  ex_query('SELECT * FROM `tbl_game` WHERE `game_id`=10', req, res)
})

// ::::::::::::::::::::::::::::::::::::::::: Countdown For Calling Live Number
// app.post('/countDownStartForLiveGame', async (req, res) => {
//   // Function to generate and log a random number from 1 to 100
//   // Function to generate a random number between min and max (inclusive)
//   function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   // Array to store unique random numbers
//   const uniqueRandomNumbers = [];

//   // Function to generate and log unique random numbers
//   function generateUniqueRandomNumber() {
//     if (uniqueRandomNumbers.length < 100) {
//       let randomNumber;
//       do {
//         randomNumber = getRandomNumber(1, 100);
//       } while (uniqueRandomNumbers.includes(randomNumber));

//       uniqueRandomNumbers.push(randomNumber);
//       console.log(randomNumber);
//     } else {
//       clearInterval(interval); // Stop the timer when 100 unique numbers are generated
//       console.log("Timer stopped.");
//     }
//   }

//   // Set a timer to call the function every 100 milliseconds
//   const interval = setInterval(generateUniqueRandomNumber, 10000);
// })

// ::::::::::::::::::::::::::::::::::::::::: Matched Ticket For Booking
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
  // console.log("Date & Time:", fullDate, fullTime);
  con.query('SELECT `game_id`,`game_number_set` FROM `tbl_game` WHERE game_start_date=? AND game_start_time < ?',
    [fullDate, fullTime],
    function (error, result, fields) {
      if (error) throw error;
      //  console.log("pppp", result);
      if (error) {
        ResponseHandler(res, false, "Api Issue", result)
      } else {
        if (result) {
          // console.log("qqqwwwse", result)
          // console.log("qqqwwwse", result[0].game_number_set)
          let numberData = JSON.parse(result[0].game_number_set);
          let gameIdVar = result[0].game_id;
          // console.log("qqqwwwq", numberData)
          function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          // Array to store unique random numbers
          const uniqueRandomNumbers = [];
          // Function to generate and log unique random numbers
          let randomNumber;
          async function generateUniqueRandomNumber() {
            if (uniqueRandomNumbers.length < 100) {
              do {
                randomNumber = getRandomNumber(1, 100);
              } while (uniqueRandomNumbers.includes(randomNumber));
              uniqueRandomNumbers.push(randomNumber);
              // console.log(randomNumber);
              numberData?.map((item, index) => {
                if (item.number == randomNumber) {
                  // console.log("randomif", item.number, randomNumber);
                  numberData[index].status = "true";
                }
              })
              // console.log("numberDataaaa", numberData);
              // userRef.set(data)
              ref.set({
                game_id: gameIdVar,
                number_set: JSON.stringify(numberData),
                currentCalledNumber: randomNumber
              })
              con.query('UPDATE `tbl_game` SET `game_number_set`=? WHERE `game_id`=?',
                [JSON.stringify(numberData), gameIdVar],
                // function (error, result, fields) {
                //   if (error) throw error;
                //   // if (error) {
                //   //   ResponseHandler(res, false, "Api Issue", result);
                //   // } else {
                //   //   if (result) {
                //   //     ResponseHandler(res, true, "Game Status Updated Successfully..", result);
                //   //   } else {
                //   //     ResponseHandler(res, false, "Sorry., Unable to Deleted", result);
                //   //   }
                //   // }
                // }
              )
            } else {
              clearInterval(interval); // Stop the timer when 100 unique numbers are generated
              // console.log("Timer stopped.");
            }
          }
          // Set a timer to call the function every 100 milliseconds
          const interval = setInterval(generateUniqueRandomNumber, 10000);
          ResponseHandler(res, true, "Successfully..", result)
        } else {
          ResponseHandler(res, false, "Sorry., Unable to..", result)
        }
      }
    });
})

// ::::::::::::::::::::::::::::::::::::::::: Edit Game
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

// ::::::::::::::::::::::::::::::::::::::::: Delete Game
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

// ::::::::::::::::::::::::::::::::::::::::: Announcement List
app.get('/announcementList', async (req, res) => {
  ex_query("SELECT * FROM tbl_announcement", req, res)
})

// ::::::::::::::::::::::::::::::::::::::::: Save Announcement
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

// ::::::::::::::::::::::::::::::::::::::::: Edit Announcement
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

// ::::::::::::::::::::::::::::::::::::::::: Delete Announcement
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
// ::::::::::::::::::::::::::::::::::::: View Ticket For Agents
app.post('/viewTicketForAgents', async (req, res) => {
  // con.query("SELECT * FROM tbl_ticket WHERE game_id=?", [req.body.gameId],
  con.query("SELECT * FROM tbl_game WHERE game_id=?", [req.body.gameId],
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

// ::::::::::::::::::::::::::::::::::::: Book Ticket By Agents
app.put('/bookTicketByAgents', async (req, res) => {
  con.query('UPDATE `tbl_game` SET `ticket_set`=? WHERE `game_id`=?',
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
app.get('/ticketCardViewForUser', async (req, res) => {
  ex_query("SELECT * FROM tbl_ticket", req, res)
})

app.listen(3000, function () {
  console.log('Server is up and Rudding on port 3000!');
});