import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/createCategory.dto";
import { Category } from "./schema/category.schema";
import { ObjectId } from "mongoose";
import { UpdateCategoryDto } from "./dto/updateCategory.dto";

@Controller("categories")
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post("create-category")
  async createCategory(@Body() category: CreateCategoryDto): Promise<Category> {
    console.log(category);
    return await this.categoryService.createCategory(category);
  }

  @Get("get-all-categories")
  async getAllCategories(): Promise<Category[]> {
    return await this.categoryService.getAllCategories();
  }

  @Post("update-category-by-id")
  async updateCategoryById(
    @Body() updatedCategory: UpdateCategoryDto
  ): Promise<Category> {
    console.log("id to delete", updatedCategory?.id);
    return await this.categoryService.updateCategoryById(updatedCategory);
  }

  @Post("delete-category-by-id")
  async deleteCategoryById(@Body() { id }: { id: ObjectId }): Promise<any> {
    console.log("id to delete", id);
    return await this.categoryService.deleteCategoryById(id);
  }
}
