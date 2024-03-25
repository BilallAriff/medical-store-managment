import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/createProduct.dto";
import { Product } from "./schema/product.schema";
import { UpdateProductDto } from "./dto/updateProduct.dto";
import { ObjectId } from "mongoose";
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createProduct(product: CreateProductDto): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    updateProductById(updatedProduct: UpdateProductDto): Promise<Product>;
    deleteProductById({ id }: {
        id: ObjectId;
    }): Promise<Product>;
}
