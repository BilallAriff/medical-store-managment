import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./Schema/user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";

// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  private readonly users = [
    {
      userId: 1,
      username: "john",
      password: "changeme",
    },
    {
      userId: 2,
      username: "maria",
      password: "guess",
    },
    {
      userId: 3,
      email: "bilalarif@adventurr.tech",
      username: "bilal",
      password: "HelloTerratorial101**()**",
    },
  ];

  // async findOne(username: string): Promise<User | undefined> {
  //   console.log(username);
  //   return this.users.find((user) => user.username === username);
  // }

  async findUserByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }

  async createUser(user: CreateUserDto) {
    // const userExist = this.findUserByEmail(user.email);
    // console.log(userExist);
    // if (userExist) {
    //   return { error: "Email already in use!" };
    // } else {
    //   const newUser = await this.userModel.create(user);
    //   return newUser.save();
    // }
    const newUser = await this.userModel.create(user);
    console.log("from userSErvice", newUser);
    return newUser;
  }

  async getAllUsers() {
    return this.users;
  }
}
