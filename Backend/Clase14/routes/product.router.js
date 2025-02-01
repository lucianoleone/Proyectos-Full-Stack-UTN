import express from "express";
import { createProductController, getAllProductsController, getProductByIdController } from "../Controllers/product.controller.js";


const productRouter = express.Router();

productRouter.get('/', getAllProductsController);

productRouter.get('/:product_id', getProductByIdController);

productRouter.post('/', createProductController);
export default productRouter;