import { Sequelize } from "sequelize";
import { Column, DataType, IsUUID, PrimaryKey,Model, Table} from "sequelize-typescript";

@Table({ tableName: 'post_comment', timestamps: false })
export class PostComment extends Model<PostComment> {

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
    postId :BigInt;

    @Column({
        allowNull:false,
        type:DataType.BIGINT
    })
    parentId:BigInt;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    title:String;

    @Column({
        allowNull:false,
        type:DataType.INTEGER
    })
    published: Number;

    @Column({
        allowNull:false,
        type:DataType.TEXT
    })
    content: String;

   

}