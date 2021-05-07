import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Carousel } from "src/entities/carousel";
import { UnitOfWork } from "../database/UnitOfWork";



@Injectable()
export class CarouselService {
    constructor(
        @Inject(UnitOfWork)
        private readonly unitOfWork: UnitOfWork,
        @InjectModel(Carousel)
        private carouselModel: typeof Carousel
    )
    {

    }
    async getAll()
    {
        return await this.carouselModel.findAll();
    }
}