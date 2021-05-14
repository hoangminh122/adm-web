import { MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarouselController } from './modules/carousel/carousel.controller';
import { CarouselModule } from './modules/carousel/carousel.module';
import { CarouselService } from './modules/carousel/carousel.service';
import { DatabaseModule } from './modules/database/database.module';
import { LoggerMiddlwware } from './modules/test/logger.middleware';
import { TestController } from './modules/test/test.controller';
import { TestModule } from './modules/test/test.module';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [DatabaseModule,
    CarouselModule,
    UploadModule,
    ServeStaticModule.forRoot({
      rootPath:join(__dirname,'..','uploads')
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddlwware)
    .forRoutes({path:'test',method:RequestMethod.ALL})

}
}
