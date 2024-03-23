/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model, ObjectId } from "mongoose";
import { SubCategory } from "./schema/subCategory.schema";
import { CreateSubCategoryDto } from "./dto/createSubCategory.dto";
import { UpdateSubCategoryDto } from "./dto/updateSubCategory.dto";
export declare class SubCategoryService {
    private subCategoryModel;
    constructor(subCategoryModel: Model<SubCategory>);
    createCategory(subCategory: CreateSubCategoryDto): Promise<import("mongoose").Document<unknown, {}, SubCategory> & SubCategory & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllCategories(): Promise<SubCategory[]>;
    updateSubCategoryById(updatedSubCategory: UpdateSubCategoryDto): Promise<import("mongoose").Document<unknown, {}, SubCategory> & SubCategory & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteCategoryById(id: ObjectId): Promise<import("mongoose").Document<unknown, {}, SubCategory> & SubCategory & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
