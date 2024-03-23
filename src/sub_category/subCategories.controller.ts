import { Body, Controller, Get, Post } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { SubCategoryService } from "./subcategories.service";
import { SubCategory } from "./schema/subCategory.schema";
import { CreateSubCategoryDto } from "./dto/createSubCategory.dto";

@Controller("sub-categories")
export class SubCategoryController {
  constructor(private subCategoryService: SubCategoryService) {}

  @Post("create-sub-category")
  async createCategory(
    @Body() subCategory: CreateSubCategoryDto
  ): Promise<SubCategory> {
    console.log(subCategory);
    return await this.subCategoryService.createCategory({ ...subCategory });
  }

  @Get("get-all-sub-categories")
  async getAllCategories(): Promise<SubCategory[]> {
    return await this.subCategoryService.getAllCategories();
  }

  @Post("delete-sub-category-by-id")
  async deleteCategoryById(@Body() { id }: { id: ObjectId }): Promise<any> {
    console.log("id to delete", id);
    return await this.subCategoryService.deleteCategoryById(id);
  }
}
