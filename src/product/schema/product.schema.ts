import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Category } from "src/category/schema/category.schema";
import { SideEffects } from "src/side_effects/schema/sideEffects.schema";
import { SubCategory } from "src/sub_category/schema/subCategory.schema";

@Schema()
export class Product extends Document {
  @Prop({ default: "/statics/product_image.png" })
  picture: string;

  @Prop({})
  name: string;

  @Prop({})
  description: string;

  @Prop({ required: true, ref: "Category", type: "ObjectId" })
  category: Category[];

  @Prop({ required: true, ref: "SubCategory", type: "ObjectId" })
  subCategories: SubCategory[];

  @Prop({ ref: "SideEffects", type: "ObjectId" })
  sideEffects?: SideEffects[];

  @Prop({ default: false })
  prescriptionRequired?: boolean;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
