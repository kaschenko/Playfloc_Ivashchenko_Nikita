import {BelongsTo, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Unit} from "../unit/unit.model";




interface RoleCreationAttrs {
    role: string,
    radiusOfAttack: number,
    damageType: string,
    baseDamage: number
}

@Table({tableName: 'classOfUnit', createdAt: false, updatedAt: false})
export class ClassOfUnit extends Model<ClassOfUnit, RoleCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    role: string;

    @Column({type: DataType.INTEGER})
    radiusOfAttack: number;

    @Column({type: DataType.STRING})
    damageType: string;

    @Column({type: DataType.INTEGER})
    baseDamage: number;

    @HasMany(() => Unit)
    users: Unit[]






}

