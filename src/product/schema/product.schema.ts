import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
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

  @Prop({ required: true })
  category: Category[];

  @Prop({ required: true })
  subCategories: SubCategory[];

  @Prop({})
  sideEffects?: SideEffects[];

  @Prop()
  prescriptionRequired?: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
