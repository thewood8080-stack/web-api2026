const obj={
getAllProducts:(req, res)=>{
  return res.status(200).json({ msg:'Get all products'});
},
addNewProduct:(req, res)=>{
 return res.status(200).json({ msg:'Add New product' });
},
getProductById:(req, res)=>{
 return res.status(200).json({ msg:`Get Product By Id ${req.params.id}` });
},
updateProductById: (req, res)=>{
 return res.status(200).json({ msg:`Update Product By Id ${req.params.id}`});
},
deleteProductById: (req, res)=>{
 return res.status(200).json({ msg:`Delete Product By Id ${req.params.id}`});
}
}
module.exports=obj