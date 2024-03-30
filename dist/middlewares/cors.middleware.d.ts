import { NestMiddleware } from "@nestjs/common";
export declare class CorsMiddleware implements NestMiddleware {
    private readonly options;
    constructor();
    use(req: any, res: any, next: any): void;
}
