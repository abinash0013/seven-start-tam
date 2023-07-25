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


app.listen(3000, function () {
  console.log('Server is up and Rudding on port 3000!');
});