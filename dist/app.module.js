"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const database_module_1 = require("./infra/mongoose/database.module");
const users_module_1 = require("./users/users.module");
const auth_service_1 = require("./auth/auth.service");
const auth_controller_1 = require("./auth/auth.controller");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const auth_guard_1 = require("./auth/auth.guard");
const product_controller_1 = require("./product/product.controller");
const product_module_1 = require("./product/product.module");
const category_module_1 = require("./category/category.module");
const subCategories_module_1 = require("./sub_category/subCategories.module");
const sideEffect_module_1 = require("./side_effects/sideEffect.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: ".env" }),
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            product_module_1.ProductModule,
            category_module_1.CategoryModule,
            subCategories_module_1.SubCategoryModule,
            sideEffect_module_1.SideEffectModule,
        ],
        controllers: [app_controller_1.AppController, auth_controller_1.AuthController, product_controller_1.ProductController],
        providers: [
            app_service_1.AppService,
            auth_service_1.AuthService,
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map