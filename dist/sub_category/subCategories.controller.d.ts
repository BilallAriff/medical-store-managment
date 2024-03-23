import { ObjectId } from "mongoose";
import { SubCategoryService } from "./subcategories.service";
import { SubCategory } from "./schema/subCategory.schema";
import { CreateSubCategoryDto } from "./dto/createSubCategory.dto";
import { UpdateSubCategoryDto } from "./dto/updateSubCategory.dto";
export declare class SubCategoryController {
    private subCategoryService;
    constructor(subCategoryService: SubCategoryService);
    createCategory(subCategory: CreateSubCategoryDto): Promise<SubCategory>;
    getAllCategories(): Promise<SubCategory[]>;
    updateCategoryById(updatedSubCategory: UpdateSubCategoryDto): Promise<SubCategory>;
    deleteCategoryById({ id }: {
        id: ObjectId;
    }): Promise<any>;
}
