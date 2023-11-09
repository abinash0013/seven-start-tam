const mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tambola',

  // :::::::::::::::::::::::::::: for production uncomment for production
  // host: "localhost",
  // user: "tambola",
  // password: "Tambola@123!",
  // database: "tambola",
})

con.connect(function (err) {
  if (err) throw err
  console.log('Connected!')
})

module.exports = { con }
