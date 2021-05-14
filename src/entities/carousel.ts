import { Column, DataType, IsUUID, PrimaryKey,Model, Table, HasMany, CreatedAt, DeletedAt} from "sequelize-typescript";
import { Sequelize } from "sequelize";
import { ContentSlide } from "./contentSlide";

@Table({ tableName: 'carousel', timestamps: false })
export class Carousel extends Model {
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
    order:number;

    @HasMany(() => ContentSlide, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      })
      contentSlides: ContentSlide[];

    @CreatedAt
    @Column({
      field: 'created_date',
      allowNull: true
      
    })
    createdDate?: Date;

    @Column({
      field: 'updated_at',
      allowNull: true,
    })
    updatedAt?: Date;
  
    @DeletedAt
    @Column({
      field: 'deleted_date',
      allowNull: true,
    })
    deletedDate?: Date;
}