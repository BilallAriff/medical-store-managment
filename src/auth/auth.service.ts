import { Injectable } from "@nestjs/common";
import { SignUpDto } from "./dto/signUpDto";
import { SignInDto } from "./dto/signInDto";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schema/user.schema";
import { Model } from "mongoose";

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signUp(req: SignUpDto): Promise<User> {
    console.log(req);
    const newUser = await new this.userModel(req);
    return newUser.save();
  }

  async signIn(req: SignInDto): Promise<User | null> {
    console.log("singing in =>", req);

    return await this.userModel.findOne({ username: "Bilal Arif" }).exec();
  }
}
