const mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'yosef',
  password: '401yos',
  database: 'ecommdb'
});

connection.connect((err) => {
  if (err == null) {
    console.log('good my sql connection - order');
  } else {
    console.log(err);
  }
});

const obj = {
  getAllOrders: (req, res) => {
    const sql = "select * from t_order";
    connection.promise().query(sql).then((results) => {
      return res.status(200).json(results[0]);
    });
  },

  getOrderById: (req, res) => {
    const id = req.params.id;
    const sql = `select * from t_order where id = ${id}`;
    connection.promise().query(sql).then((results) => {
      return res.status(200).json(results[0]);
    });
  },

  addNewOrder: (req, res) => {
    const order = req.body;
    const sql = `insert into t_order (user_id, product_id, quantity, order_date) values (${order.user_id}, ${order.product_id}, ${order.quantity}, '${order.order_date}')`;
    connection.promise().query(sql).then((results) => {
      return res.status(200).json(results[0]);
    });
  },

  updateOrderById: (req, res) => {
    const id = req.params.id;
    const order = req.body;
    const sql = `update t_order set user_id=${order.user_id}, product_id=${order.product_id}, quantity=${order.quantity}, order_date='${order.order_date}' where id=${id}`;
    connection.promise().query(sql).then((results) => {
      return res.status(200).json(results[0]);
    });
  },

  deleteOrderById: (req, res) => {
    const id = req.params.id;
    const sql = `delete from t_order where id = ${id}`;
    connection.promise().query(sql).then((results) => {
      return res.status(200).json(results[0]);
    });
  }
};

module.exports = obj;