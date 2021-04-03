import { Category } from "src/entities/category";

export const categoryRepository = {
    provide:'CategoryRepository',
    useValue:Category
}