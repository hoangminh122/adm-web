import { Sequelize } from "sequelize";
import { Column, DataType, IsUUID, PrimaryKey,Model, Table} from "sequelize-typescript";

@Table({ tableName: 'post_meta', timestamps: false })
export class PostMeta extends Model<PostMeta> {

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
        type:DataType.STRING
    })
    key :String;

    @Column({
        allowNull:false,
        type:DataType.TEXT
    })
    content :String;


}
