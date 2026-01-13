require('dotenv').config();
const express=require('express');
const app=express();
const morgan=require('morgan');
const ipFilter=require('./api/v1/middlewares/ipFilter');
const mongoos=require('mongoose');
app.use(express.json());
app.use(express.urlencoded());
app.use(ipFilter);



const productRouter=require('./api/v1/routes/product');
const orderRouter=require('./api/v1/routes/order');
const categoryRouter=require('./api/v1/routes/category');
const userRouter=require('./api/v1/routes/user');



app.use(morgan('dev'));
const mongoUser=process.env.MONGO_USER;
const mongoPass=process.env.MONGO_PASS;
const mongoserver=process.env.MONGO_SERVER;
const mongoConstr=`mongodb+srv://${mongoUser}:${mongoPass}@${mongoserver}/?appName=Cluster0`;
mongoos.connect(mongoConstr).then((stat)=>{
console.log("Connected to MongoDB");
});

const productSchema=new mongoos.Schema({
    pid:Number,
    price:Number,
    pname:String
});

const product=mongoos.model('products',productSchema);

product.insertOne({pid:8,price:60,pname:"milk"});
product.find().then((data)=>{
    console.log(data);
});





app.use('/product',productRouter);
app.use('/order',orderRouter);
app.use('/category',categoryRouter); 
app.use('/user',userRouter); 


app.use((req,res)=>{
    res.status(404).json({msg:'path not found'});
});


module.exports=app;