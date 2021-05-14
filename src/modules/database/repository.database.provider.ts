import { Carousel } from "src/entities/carousel";
import { Files } from "src/entities/file";

export const carouselRepository = {
    provide:'CarouselRepository',
    useValue:Carousel
}

export const filesRepository = {
    provide:'FilesRepository',
    useValue:Files
}