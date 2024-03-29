import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { SubCategory } from "./schema/subCategory.schema";
import { CreateSubCategoryDto } from "./dto/createSubCategory.dto";
import { UpdateSubCategoryDto } from "./dto/updateSubCategory.dto";

@Injectable()
export class SubCategoryService {
  constructor(
    @InjectModel(SubCategory.name) private subCategoryModel: Model<SubCategory>
  ) {}

  async createCategory(subCategory: CreateSubCategoryDto) {
    return await this.subCategoryModel.create(subCategory);
  }

  async getAllCategories(): Promise<SubCategory[]> {
    const allSubCategories = await this.subCategoryModel.find({
      isDeleted: false,
    });
    return allSubCategories;
  }

  async updateSubCategoryById(updatedSubCategory: UpdateSubCategoryDto) {
    return await this.subCategoryModel.findByIdAndUpdate(
      { _id: updatedSubCategory?.id },
      updatedSubCategory,
      { new: true }
    );
  }

  async deleteCategoryById(id: ObjectId) {
    return await this.subCategoryModel.findByIdAndUpdate(
      { _id: id },
      { isDeleted: true },
      { new: true }
    );
  }
}
