import { Injectable } from "@nestjs/common";
import { NestMiddleware } from "@nestjs/common";
import {Request,Response,NextFunction} from 'express'

@Injectable()
export class LoggerMiddlwware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Request...');
        res.send("fail");
       // next();
    
    }

}