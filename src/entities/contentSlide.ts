import { Sequelize } from "sequelize";
import { Column, DataType, IsUUID, PrimaryKey,Model, Table, ForeignKey} from "sequelize-typescript";
import { Carousel } from "./carousel";

@Table({ tableName: 'content-slide', timestamps: false })
export class ContentSlide extends Model<ContentSlide> {
    @IsUUID(4)
    @PrimaryKey
    @Column({
        type:DataType.UUID,
        defaultValue:Sequelize.literal('uuid_generate_v4()'),
    })
    id!: String;

    @ForeignKey(() => Carousel)
    @Column({
        field:'carouse_id',
        type:DataType.UUID,
    })
    carouselId! :string;

    @Column({
        allowNull:false,
        type:DataType.TEXT
    })
    contents:String
}