import express from "express";
import { register } from "../controllers/UsersControllers.js";
import { SellerMiddleware, registrationCheck } from "../middlewares/authMiddleware.js";
import { addProduct } from "../controllers/ProductsControllers.js";


var router = express.Router();


router.post('/register',registrationCheck, register);
router.post('/addProduct',SellerMiddleware, addProduct);




export default router;