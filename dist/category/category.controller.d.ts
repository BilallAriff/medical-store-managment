import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/createCategory.dto";
import { Category } from "./schema/category.schema";
import { ObjectId } from "mongoose";
import { UpdateCategoryDto } from "./dto/updateCategory.dto";
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    createCategory(category: CreateCategoryDto): Promise<Category>;
    getAllCategories(): Promise<Category[]>;
    updateCategoryById(updatedCategory: UpdateCategoryDto): Promise<Category>;
    deleteCategoryById({ id }: {
        id: ObjectId;
    }): Promise<any>;
}
