export class CreateUnitDto {
    customId: number;
    readonly hp: number;
    readonly maxHp: number;
    readonly mana: number;
    readonly maxMana: number;
    readonly armor: number;
    readonly magResist: number;
    readonly roleId: number;
    readonly x: number;
    readonly y: number;
}