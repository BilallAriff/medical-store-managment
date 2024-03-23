import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./infra/mongoose/database.module";
import { UsersModule } from "./users/users.module";
import { AuthService } from "./auth/auth.service";
import { AuthController } from "./auth/auth.controller";
import { AuthModule } from "./auth/auth.module";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./auth/auth.guard";
import { ProductController } from "./product/product.controller";
import { ProductModule } from "./product/product.module";
import { CategoryModule } from "./category/category.module";
import { SubCategoryModule } from "./sub_category/subCategories.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ".env" }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    ProductModule,
    CategoryModule,
    SubCategoryModule,
  ],
  controllers: [AppController, AuthController, ProductController],
  providers: [
    AppService,
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
