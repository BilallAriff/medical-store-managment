"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const subCategory_schema_1 = require("./schema/subCategory.schema");
const subCategories_controller_1 = require("./subCategories.controller");
const subcategories_service_1 = require("./subcategories.service");
let SubCategoryModule = class SubCategoryModule {
};
SubCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: subCategory_schema_1.SubCategory.name, schema: subCategory_schema_1.SubCategorySchema },
            ]),
        ],
        controllers: [subCategories_controller_1.SubCategoryController],
        providers: [subcategories_service_1.SubCategoryService],
    })
], SubCategoryModule);
exports.SubCategoryModule = SubCategoryModule;
//# sourceMappingURL=subCategories.module.js.map