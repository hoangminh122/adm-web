import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { carouselRepository } from "../database/repository.database.provider";
import { CarouselController } from "./carousel.controller";
import { CarouselService } from "./carousel.service";


@Module({
    imports:[DatabaseModule],
    controllers:[CarouselController],
    providers:[CarouselService,carouselRepository]
})
export class CarouselModule {

}