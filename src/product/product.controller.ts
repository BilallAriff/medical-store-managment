import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/createProduct.dto";
import { Product } from "./schema/product.schema";
import { UpdateProductDto } from "./dto/updateProduct.dto";
import { ObjectId } from "mongoose";

@Controller("product")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post("create-product")
  async createProduct(@Body() product: CreateProductDto): Promise<Product> {
    return await this.productService.createProduct(product);
  }

  @Get("get-all-products")
  async getAllProducts(): Promise<Product[]> {
    return await this.productService.getAllProducts();
  }

  @Post("update-product-by-id")
  async updateProductById(
    @Body() updatedProduct: UpdateProductDto
  ): Promise<Product> {
    return await this.productService.updateProductById(updatedProduct);
  }

  @Post("delete-product-by-id")
  async deleteProductById(@Body() { id }: { id: ObjectId }): Promise<Product> {
    return await this.productService.deleteProductById(id);
  }
}
