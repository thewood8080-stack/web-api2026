const mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'yosef',
  password: '401yos',
  database: 'ecommdb'
});

connection.connect((err) => {
  if (err == null) {
    console.log('good my sql connection - category');
  } else {
    console.log(err);
  }
});

const obj = {
  getAllCategories: (req, res) => {
    const sql = "select * from t_category";
    connection.promise().query(sql).then((results) => {
      return res.status(200).json(results[0]);
    });
  },

  getCategoryById: (req, res) => {
    const id = req.params.id;
    const sql = `select * from t_category where id = ${id}`;
    connection.promise().query(sql).then((results) => {
      return res.status(200).json(results[0]);
    });
  },

  addNewCategory: (req, res) => {
    const category = req.body;
    const sql = `insert into t_category (cname, cdesc) values ('${category.cname}', '${category.cdesc}')`;
    connection.promise().query(sql).then((results) => {
      return res.status(200).json(results[0]);
    });
  },

  updateCategoryById: (req, res) => {
    const id = req.params.id;
    const category = req.body;
    const sql = `update t_category set cname='${category.cname}', cdesc='${category.cdesc}' where id=${id}`;
    connection.promise().query(sql).then((results) => {
      return res.status(200).json(results[0]);
    });
  },

  deleteCategoryById: (req, res) => {
    const id = req.params.id;
    const sql = `delete from t_category where id = ${id}`;
    connection.promise().query(sql).then((results) => {
      return res.status(200).json(results[0]);
    });
  }
};

module.exports = obj;