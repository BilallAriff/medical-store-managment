"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const subCategory_schema_1 = require("./schema/subCategory.schema");
let SubCategoryService = class SubCategoryService {
    constructor(subCategoryModel) {
        this.subCategoryModel = subCategoryModel;
    }
    async createCategory(subCategory) {
        return await this.subCategoryModel.create(subCategory);
    }
    async getAllCategories() {
        const allSubCategories = await this.subCategoryModel.find({
            isDeleted: false,
        });
        return allSubCategories;
    }
    async updateSubCategoryById(updatedSubCategory) {
        return await this.subCategoryModel.findByIdAndUpdate({ _id: updatedSubCategory === null || updatedSubCategory === void 0 ? void 0 : updatedSubCategory.id }, updatedSubCategory, { new: true });
    }
    async deleteCategoryById(id) {
        return await this.subCategoryModel.findByIdAndUpdate({ _id: id }, { isDeleted: true }, { new: true });
    }
};
SubCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(subCategory_schema_1.SubCategory.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SubCategoryService);
exports.SubCategoryService = SubCategoryService;
//# sourceMappingURL=subcategories.service.js.map