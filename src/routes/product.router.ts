import { Router } from "express";
import { validatorPostProduct } from "../middlewares/validators/product.validator";
import {
	createProduct,
	getAllProducts,
	getProductId,
	updateProduct,
	deleteProduct
} from "../controller/product.controller";

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.post("/", createProduct);
productRouter.get("/:id", getProductId);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
