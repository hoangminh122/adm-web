import { Sequelize } from "sequelize";
import { Column, DataType, IsUUID, PrimaryKey,Model, Table} from "sequelize-typescript";

@Table({ tableName: 'post_category', timestamps: false })
export class PostCategory extends Model<PostCategory> {

    @Column({
        allowNull:false,
        type:DataType.BIGINT
    })
    postId :BigInt;

    @Column({
        allowNull:false,
        type:DataType.BIGINT
    })
    categoryId:BigInt;

   

}