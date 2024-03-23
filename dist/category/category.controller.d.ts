import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/createCategory.dto";
import { Category } from "./schema/category.schema";
import { ObjectId } from "mongoose";
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    createCategory(category: CreateCategoryDto): Promise<Category>;
    getAllCategories(): Promise<Category[]>;
    deleteCategoryById({ id }: {
        id: ObjectId;
    }): Promise<any>;
}
