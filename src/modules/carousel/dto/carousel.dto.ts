import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString, IsUUID } from "class-validator";
import { now } from "sequelize/types/lib/utils";

export class CreateCarouselDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    url :string;

    @ApiPropertyOptional()
    order:number;

    @ApiPropertyOptional()
    createdDate: Date;

}