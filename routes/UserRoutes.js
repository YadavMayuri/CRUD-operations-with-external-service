import express from "express";
import { register } from "../controllers/UsersControllers.js";
import { AddProductMiddleware, GetProductsMiddleware, UpdateProductMiddleware, deleteProductMiddleware, registrationCheck } from "../middlewares/authMiddleware.js";
import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/ProductsControllers.js";


var router = express.Router();


router.post('/register',registrationCheck, register);
router.post('/addProduct',AddProductMiddleware, addProduct);
router.get('/getAllProducts',GetProductsMiddleware, getAllProducts);
router.get('/getProductById', GetProductsMiddleware,getProductById);
router.put('/updateProduct',UpdateProductMiddleware, updateProduct);
router.delete('/deleteProduct',deleteProductMiddleware, deleteProduct);








export default router;