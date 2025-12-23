require('dotenv').config();
const express=require('express');
const app=express();

app.use(express.json())
const productRouter=require('./api/v1/routes/product');
const orderRouter=require('./api/v1/routes/order')
const categoryRouter=require('./api/v1/routes/category');
const userRouter=require('./api/v1/routes/user')


const morgan=require('morgan');
const ipFilter=require('./api/v1/middlewares/ipFilter');


app.use(morgan('dev'));
const mongoUser=process.env.MONGO_USER
const mongoPass=process.env.MONGO_PASS
const mongoserver=process.env.MONGO_SERVER
const mongoConstr=`mongodb+srv://${mongoUser}:${mongoPass}@${mongoserver}/?appName=Cluster0`
console.log(mongoConstr);


app.use(ipFilter);
app.use('/product',productRouter);
app.use('/order',orderRouter);
app.use('/category',categoryRouter); 
app.use('/user',userRouter); 


app.use((req,res)=>{
    res.status(404).json({msg:'path not found'});
});


module.exports=app;