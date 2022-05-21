import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ClassOfUnitModule} from "../class-of-unit/class-of-unit.module";
import {ClassOfUnit} from "../class-of-unit/class-of-unit.model";


interface UnitCreationAttrs {
    customId: number
    hp: number,
    maxHp: number,
    mana: number,
    maxMana: number,
    armor: number,
    magResist: number,
    x: number,
    y: number,

}

@Table({tableName: 'unit'})
export class Unit extends Model<Unit, UnitCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER, allowNull: false, unique: true})
    customId: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    hp: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    maxHp: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    mana: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    maxMana: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    armor: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    magResist: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    x: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    y: number;

    @ForeignKey(() => ClassOfUnit)
    @Column({type: DataType.INTEGER})
    roleId: number

    @BelongsTo(() => ClassOfUnit)
    role: string




}