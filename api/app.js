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
  con.query(sql, [req.body.userName, req.body.password], function (error, result, fields) {
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

// ::::::::::::::::::::::::::::::::::::::::: ticket api code
app.get('/gameList', async (req, res) => {
  ex_query("SELECT * FROM tbl_game", req, res)
})

app.post('/saveGame', async (req, res) => {
  con.query('INSERT INTO `tbl_game` SET `game_name`=?, `game_start_date`=?, `game_start_time`=?, `game_maximum_ticket_sell`=?, `game_amount`=?, `game_quick_fire`=?, `game_star`=?, `game_top_line`=?, `game_middle_line`=?, `game_bottom_line`=?, `game_corner`=?, `game_half_sheet`=?, `game_housefull`=?, `game_status`=?',
    [req.body.gameName, req.body.gameStartDate, req.body.gameStartTime, req.body.gameMaximumTicketSell, req.body.gameAmount, req.body.gameQuickFire, req.body.gameStar, req.body.gameTopLine, req.body.gameMiddleLine, req.body.gameBottomLine, req.body.gameCorner, req.body.gameHalfSheet, req.body.gameHousefull, req.body.gameStatus],
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

app.put('/editGame', async (req, res) => {
  con.query('UPDATE `tbl_game` SET `game_name`=?, `game_start_date`=?, `game_start_time`=?, `game_maximum_ticket_sell`=?, `game_amount`=?, `game_quick_fire`=?, `game_star`=?, `game_top_line`=?, `game_middle_line`=?, `game_bottom_line`=?, `game_corner`=?, `game_half_sheet`=?, `game_housefull`=?, `game_status`=? WHERE `game_id`',
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

app.listen(3000, function () {
  console.log('Server is up and Rudding on port 3000!');
});