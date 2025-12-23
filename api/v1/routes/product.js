const express=require('express');

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