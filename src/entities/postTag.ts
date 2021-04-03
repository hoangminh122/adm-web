import { Sequelize } from "sequelize";
import { Column, DataType, IsUUID, PrimaryKey,Model, Table} from "sequelize-typescript";

@Table({ tableName: 'post_tag', timestamps: false })
export class PostTag extends Model<PostTag> {

    @Column({
        allowNull:false,
        type:DataType.BIGINT
    })
    postId :BigInt;

    @Column({
        allowNull:false,
        type:DataType.BIGINT
    })
    tagId :BigInt;

}
