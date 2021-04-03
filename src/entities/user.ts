import { Sequelize } from "sequelize";
import { Column, DataType, IsUUID, PrimaryKey,Model, Table} from "sequelize-typescript";

@Table({ tableName: 'tag', timestamps: false })
export class User extends Model<User> {

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
    firstName :String;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    lastName :String;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    mobile :String;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    email :String;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    passwordHash :String;

    @Column({
        allowNull:false,
        type:DataType.DATE
    })
    registeredAt :Date;

    @Column({
        allowNull:false,
        type:DataType.STRING


        
    })
    intro :String;

    @Column({
        allowNull:false,
        type:DataType.TEXT
    })
    profile :String;

}
