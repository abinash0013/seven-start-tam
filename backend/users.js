var express = require('express');
const { con } = require('./sqlConfig/connection');

var app = express();
var cors = require('cors')
app.use(cors("*"))

const ex_query = (sql, req, res) => {
  con.query(sql, function (error, result, fields) {
    if (error) throw error;
    console.log(result);
    if (error) {
      res.status(400).send('Error in database operation');
    } else {
      res.send(result);
    }
  });
}

app.get('/list', (req, res) => {
  ex_query("SELECT * FROM tbl_users", req, res)
})

app.post('/users-add', (req, res) => {
  // const values = ex_query("INSERT INTO `tbl_users`(`name`, `email`, `phone`, `gender`) VALUES (?)", req, res);
  ex_query("INSERT INTO `tbl_users`(`name`, `email`, `phone`, `gender`) VALUES (?)", req, res);
  const values = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.gender
  ]
  // console.log("resulttttt");
  console.log("resultttt", values);
  res.send(values);
})

// app.post('/users-add', function (req, res) {
//   var params = req.body;
//   console.log("dsssdewewew", params);
//   ex_query('INSERT INTO tbl_users SET ?', params, function (error, results, fields) {
//     if (error) throw error;
//     res.end(JSON.stringify(results));
//   });
// });

// app.post('/users-add', function (req, res) {
//   let user = req.body.name;
//   if (!user) {
//     return res.status(400).send({ error: true, message: 'Please provide user' });
//   }
//   ex_query("INSERT INTO tbl_users SET ? ", { name: user, email: user, phone: user, gender: user },
//     function (error, results, fields) {
//       if (error) throw error;
//       return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
//     });
// });

// app.post('/users-add', (req, res) => {
//   const { name, email, phone, gender } = req.body;
//   const user = { name, email, phone, gender };

//   var result = ex_query('INSERT INTO tbl_users SET ?', user, req, res)
//   console.log("resulttt", result);
//   res.send(result);
// });

app.listen(3000, function () {
  console.log('Server is up and Rudding on port 3000!');
});