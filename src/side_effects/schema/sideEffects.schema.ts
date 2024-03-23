import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class SideEffects extends Document {
  @Prop({ required: true })
  name: string;
}

export const SideEffectsSchema = SchemaFactory.createForClass(SideEffects);
