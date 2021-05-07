import { Sequelize } from "sequelize";
import { Column, DataType, IsUUID, PrimaryKey,Model, Table, HasMany} from "sequelize-typescript";
import { ContentSlide } from "./contentSlide";

@Table({ tableName: 'carousel', timestamps: false })
export class Carousel extends Model<Carousel> {
    @IsUUID(4)
    @PrimaryKey
    @Column({
        type:DataType.UUID,
        defaultValue:Sequelize.literal('uuid_generate_v4()'),
    })
    id!: String;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    url :string;

    @Column({
        allowNull:false,
        type:DataType.INTEGER
    })
    order:BigInt;

    @HasMany(() => ContentSlide, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      })
      contents: ContentSlide[];
}