const mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'yosef',
  password: '401yos',
  database: 'ecommdb'
});

connection.connect((err) => {
  if (err == null) {
    console.log('good my sql connection - user');
  } else {
    console.log(err);
  }
});

const obj = {
  getAllUsers: (req, res) => {
    const sql = "select * from t_user";
    connection.promise().query(sql).then((results) => {
      return res.status(200).json(results[0]);
    });
  },

  getUserById: (req, res) => {
    const id = req.params.id;
    const sql = `select * from t_user where id = ${id}`;
    connection.promise().query(sql).then((results) => {
      return res.status(200).json(results[0]);
    });
  },

  addNewUser: (req, res) => {
    const user = req.body;
    const sql = `insert into t_user (username, email, password, phone) values ('${user.username}', '${user.email}', '${user.password}', '${user.phone}')`;
    connection.promise().query(sql).then((results) => {
      return res.status(200).json(results[0]);
    });
  },

  updateUserById: (req, res) => {
    const id = req.params.id;
    const user = req.body;
    const sql = `update t_user set username='${user.username}', email='${user.email}', password='${user.password}', phone='${user.phone}' where id=${id}`;
    connection.promise().query(sql).then((results) => {
      return res.status(200).json(results[0]);
    });
  },

  deleteUserById: (req, res) => {
    const id = req.params.id;
    const sql = `delete from t_user where id = ${id}`;
    connection.promise().query(sql).then((results) => {
      return res.status(200).json(results[0]);
    });
  }
};

module.exports = obj;