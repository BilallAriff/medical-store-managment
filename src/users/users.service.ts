import { Injectable } from "@nestjs/common";

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
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

  async findOne(username: string): Promise<User | undefined> {
    console.log(username);
    return this.users.find((user) => user.username === username);
  }

  async getAllUsers() {
    return this.users;
  }
}