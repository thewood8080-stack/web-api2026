const express=require('express');

const {
  getAllOrders,
  addNewOrder,
  getOrderById,
  updateOrderById,
  deleteOrderById
} = require('../controllers/order');
const router=express.Router();

router.get('/',getAllOrders);

router.post('/',addNewOrder);

router.get('/:id',getOrderById);

router.put('/:id',updateOrderById);

router.delete('/:id',deleteOrderById);

module.exports=router;