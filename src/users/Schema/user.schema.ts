import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
  @Prop({ default: "/static/default_profile_pic.png" })
  profile_pic: string;

  @Prop({ isRequired: true })
  firstName: string;

  @Prop({ isRequired: true })
  lastName: string;

  @Prop({ isRequired: true })
  social_security_number: string;

  @Prop()
  driving_license_number: string;

  @Prop({ isRequired: true, unique: true })
  email: string;

  @Prop({ isRequired: true })
  password: string;

  @Prop({ isRequired: true })
  primary_contact: string;

  @Prop()
  secondary_contact: string;

  @Prop({ isRequired: true })
  primary_address: string;

  @Prop()
  secondary_address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
