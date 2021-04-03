import { Sequelize } from "sequelize";
import { Column, DataType, IsUUID, PrimaryKey,Model, Table} from "sequelize-typescript";

@Table({ tableName: 'tag', timestamps: false })
export class Tag extends Model<Tag> {

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
    title :String;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    metaTitle :String;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    slug :String;

    @Column({
        allowNull:false,
        type:DataType.TEXT
    })
    content :String;

}
