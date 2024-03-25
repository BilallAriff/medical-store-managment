import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Product } from "./schema/product.schema";
import { CreateProductDto } from "./dto/createProduct.dto";
import { UpdateProductDto } from "./dto/updateProduct.dto";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>
  ) {}

  async createProduct(product: CreateProductDto) {
    return await this.productModel.create(product);
  }

  async getAllProducts() {
    return await this.productModel.find({ isDeleted: false });
  }

  async updateProductById(updateProduct: UpdateProductDto) {
    return await this.productModel.findByIdAndUpdate(
      { _id: updateProduct?.id },
      updateProduct,
      { new: true }
    );
  }

  async deleteProductById(id: ObjectId) {
    return await this.productModel.findByIdAndUpdate(
      { _id: id },
      { isDeleted: true },
      { new: true }
    );
  }
}
