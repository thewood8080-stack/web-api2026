const express=require('express');
// const productController=require('../controllers/product');
const {getAllProducts,
    addNewProduct,
    getProductById,
    updateProductById,
    deleteProductById
}=require('../controllers/product');
const router = express.Router();

router.get('/',getAllProducts);

router.post('/',addNewProduct);

router.get('/:id',getProductById);

router.put('/:id',updateProductById);

router.delete('/:id',deleteProductById);

module.exports=router;