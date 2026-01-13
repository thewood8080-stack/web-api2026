const product=require('../models/product');

var mysql = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'yosef',
  password : '401yos',
  database : 'ecommdb'
});

   connection.connect((err) =>{   
      if(err==null){
         console.log('good my sql connection');
        }
      else
        {
           console.log(err);
        }   
});  

const obj={
  getAllProducts:(req,res)=>{
    let sql="select * from t_product";
     connection.promise().query(sql).then((results)=>{

    return res.status(200).json(results[0]);
   });
},

  getProductById: (req, res) => {
    const id = req.params.id;

    let sql = `select * from t_product where id = ${id}`;
    connection.promise().query(sql).then((results) => {
     
    return res.status(200).json(results[0]);
    });
  },

updateProductById: (req, res) => {
  const id = req.params.id;
  const prod = req.body;
  let sql = `update t_product set pname='${prod.pname}', price=${prod.price} where pid=${id}`;
  connection.promise().query(sql).then((results) => {
    return res.status(200).json(results[0]);
  });

},

addNewProduct: (req, res) => {
  const prod = req.body;
    let sql = `insert into t_product (pname, price, pdesc, picname) values ('${prod.pname}', ${prod.price}, '${prod.pdesc}', '${prod.picname}')`;
    connection.promise().query(sql).then((results) => {
    return res.status(200).json(results[0]);
  });
},


deleteProductById: (req, res) => {
    const id = req.params.id;

    let sql = `delet from t_product where id = ${id}`;
    connection.promise().query(sql).then((results) => {
      return res.status(200).json(results[0]);
    });
  }
};






module.exports=obj;