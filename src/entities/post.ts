import { Sequelize } from "sequelize";
import { Column, DataType, IsUUID, PrimaryKey,Model, Table} from "sequelize-typescript";

@Table({ tableName: 'post', timestamps: false })
export class Post extends Model<Post> {

    @IsUUID(4)
    @PrimaryKey
    @Column({
        type:DataType.UUID,
        defaultValue:Sequelize.literal('uuid_generate_v4()'),
    })
    id!: String;

    @Column({
        allowNull:false,
        type:DataType.BIGINT
    })
    authorId :BigInt;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    parentId:String;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    title:String;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    metaTitle:String;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    slug:String

    @Column({
        allowNull:false,
        type:DataType.TEXT
    })
    summary:String

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    published:String

    @Column({
        allowNull:false,
        type:DataType.TEXT
    })
    content:String

}