import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { CarouselService } from './carousel.service';
import { CreateCarouselDto } from "./dto/carousel.dto";

@Controller('carousel')
export class CarouselController {
    constructor(
        private readonly carouselService:CarouselService
    )
    {

    }

    @Post('')
    async createCarousel(@Body() carouselDto: CreateCarouselDto){
       return await this.carouselService.addCarousel(carouselDto);
    }

    @Put(':id')
    async updateCarousel(@Body() carouselDto: CreateCarouselDto,@Query('id') id:string){
        console.log("id"+id);
     
        return await this.carouselService.updateCarousel(carouselDto,id);
    }

    @Get('/')
    async getAll()
    {
        return await this.carouselService.getAll();
    }

    @Delete(':id')
    // @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Delete Comment' })
    async deleteComment(@Param('id') id: string) {
      const result = await this.carouselService.deleteComment(id);
      return { success: result };
    }
  }
  

}