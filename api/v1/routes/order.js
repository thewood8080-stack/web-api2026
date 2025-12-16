const express=require('express');
const router=express.Router();


router.get('/',(req, res)=>{
  res.status(200).json({ msg:'Get all orders'});
});

router.post('/',(req, res)=>{
  res.status(200).json({ msg:'Add New order' });
});

router.get('/:id',(req, res)=>{
  res.status(200).json({ msg:`Get order By Id ${req.params.id}` });
});

router.put('/:id', (req, res)=>{
  res.status(200).json({ msg:`Update order By Id ${req.params.id}`});
});

router.delete('/:id', (req, res)=>{
  res.status(200).json({ msg:`Delete order By Id ${req.params.id}`});
});

module.exports=router;