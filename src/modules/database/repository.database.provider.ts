import { Carousel } from "src/entities/carousel";
import { Category } from "src/entities/category";

export const carouselRepository = {
    provide:'CarouselRepository',
    useValue:Carousel
}