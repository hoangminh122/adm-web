
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { LoggerMiddlwware } from './logger.middleware';
import { TestController } from './test.controller';
import { TestService } from './test.service';


@Module({
    imports:[],
    controllers:[TestController],
    providers:[TestService]
})
export class TestModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(LoggerMiddlwware)
        .forRoutes({path:'test',method:RequestMethod.ALL})

    }

}