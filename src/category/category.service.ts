import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Category } from "./schema/category.schema";
import { Model, ObjectId } from "mongoose";
import { CreateCategoryDto } from "./dto/createCategory.dto";
import { UpdateCategoryDto } from "./dto/updateCategory.dto";

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>
  ) {}

  async createCategory(category: CreateCategoryDto) {
    console.log("from service", category);
    return await this.categoryModel.create(category);
  }

  async getAllCategories() {
    return await this.categoryModel.find({ isDeleted: false });
  }

  async updateCategoryById(updatedCategory: UpdateCategoryDto) {
    return await this.categoryModel.findByIdAndUpdate(
      { _id: updatedCategory?.id },
      updatedCategory,
      { new: true }
    );
  }

  async deleteCategoryById(id: ObjectId) {
    return await this.categoryModel.findByIdAndUpdate(
      { _id: id },
      { isDeleted: true },
      { new: true }
    );
  }
}
