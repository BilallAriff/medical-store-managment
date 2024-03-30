import { Injectable, NestMiddleware } from "@nestjs/common";
import { CorsOptions } from "cors";

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  private readonly options: CorsOptions;

  constructor() {
    this.options = {
      origin: "*", // Replace with allowed origins (or use a function to check)
      allowedMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"], // Adjust as needed
    };
  }

  use(req: any, res: any, next: any) {
    res.header("Access-Control-Allow-Origin", this.options.origin);
    res.header(
      "Access-Control-Allow-Methods",
      this.options.allowedMethods.join(", ")
    );
    res.header(
      "Access-Control-Allow-Headers",
      this.options.allowedHeaders.join(", ")
    );
    next();
  }
}
