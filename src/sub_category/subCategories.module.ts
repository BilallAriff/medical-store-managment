import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SubCategory, SubCategorySchema } from "./schema/subCategory.schema";
import { SubCategoryController } from "./subCategories.controller";
import { SubCategoryService } from "./subcategories.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SubCategory.name, schema: SubCategorySchema },
    ]),
  ],
  controllers: [SubCategoryController],
  providers: [SubCategoryService],
})
export class SubCategoryModule {}
