import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UUIDV4 } from "sequelize";
import { Carousel } from "src/entities/carousel";
import { UnitOfWork } from "../database/UnitOfWork";
import { CreateCarouselDto } from "./dto/carousel.dto";



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

    async addCarousel(carouselDto:CreateCarouselDto)
    {
        return await (await this.carouselModel.create(carouselDto));
    }

    async updateCarousel(carouselDto:CreateCarouselDto,id)
    {
        console.log("carousel:",carouselDto);
         await this.unitOfWork.scope(async transaction => {
          console.log("okie");
            const carousel = await this.carouselModel.findOne({
              where: { id },
              transaction
            });
            console.log("asdasd");
            if (!carousel) {
              throw new HttpException(
                {
                  statusCode: HttpStatus.BAD_REQUEST,
                  message: 'Carousel not exists',
                },
                HttpStatus.BAD_REQUEST,
              );
            }
            await this.carouselModel.update(carouselDto, {
              where: { id },
              transaction,
            });
            return true;
          });
          return true;
    }

    async getAll()
    {
        return await this.carouselModel.findAll({
            order: [
            ['order', 'DESC'],
        ]
        });
    }

    async deleteComment(id: string) {
      return this.unitOfWork.scope(async transaction => {
        await this.carouselModel.destroy({ where: { id }, transaction });
        return true;
      });
    }
}