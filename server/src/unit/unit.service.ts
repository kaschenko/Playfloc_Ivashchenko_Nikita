import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Unit} from "./unit.model";
import {CreateUnitDto} from "./dto/create-unit.dto";
import {AddClassDto} from "./dto/addClass.dto";
import {ClassOfUnitService} from "../class-of-unit/class-of-unit.service";
import {AttackDto} from "./dto/attack.dto";

@Injectable()
export class UnitService {

    constructor(@InjectModel(Unit) private unitRepository: typeof Unit,
                private classService: ClassOfUnitService) {

    }

    async createUnit(dto: CreateUnitDto) {
        console.log(dto)
        const unit = await this.unitRepository.create(dto)
        return unit
    }

    async editUnit(dto: CreateUnitDto) {
        const destroyedUnit = await this.unitRepository.destroy({where: {customId: dto.customId}})
        const unit = await this.unitRepository.create(dto)
        return unit

    }

    async addClass(dto: AddClassDto) {
        console.log(dto.role)
        const role = await this.classService.getClassByValue(dto.role)
        const update = await this.unitRepository.update({roleId: role.id}, {where: {roleId: null, customId: dto.customId}})
        return dto

    }

    async removeUnit(customId) {
        const destroyedUnit = await this.unitRepository.destroy({where: customId})
        return `This id was destroyed`
    }

    async getAllUnits() {
        const units = await this.unitRepository.findAll()
        return units
    }

    async attack(dto: AttackDto) {
        const attacker = await this.unitRepository.findOne({where: {customId: dto.attackerId}})
        const attacked = await this.unitRepository.findOne({where: {customId: dto.attackedId}})
        const roleFromOfAttacker = await this.classService.getClassById(attacker.roleId)
        const roleFormOfAttacker = await this.classService.getClassById(attacked.roleId)
        //Дистанция = норма евклидового пространства
        const xDistance = Math.pow((attacker.x - attacked.x), 2)
        const yDistance = Math.pow((attacker.y - attacked.y), 2)
        const distance = Math.round(Math.abs(Math.sqrt(xDistance + yDistance)))

        if ((roleFromOfAttacker.radiusOfAttack >= distance &&
            roleFromOfAttacker.role == "воин") || (
            roleFromOfAttacker.radiusOfAttack >= distance &&
            roleFromOfAttacker.role == "лучник")
            ) {

            let damage = 0

            if (roleFromOfAttacker.role == "воин") {
                damage += roleFromOfAttacker.baseDamage +
                    roleFromOfAttacker.baseDamage * (attacker.maxHp - attacker.hp)/attacker.maxHp
            } else if(roleFromOfAttacker.role == "лучник") {
                damage += roleFromOfAttacker.baseDamage +
                    roleFromOfAttacker.baseDamage * distance/roleFromOfAttacker.radiusOfAttack
            }


            if (attacked.armor < damage) {
                damage -= attacked.armor
            } else {
                const armorAfterAttack = Math.round(attacked.armor - damage)
                await this.unitRepository.update({armor: armorAfterAttack}, {where : {customId: attacked.customId}})
                return `У юнита под номером ${attacked.customId} осталось ${armorAfterAttack} брони и ${attacked.hp} hp`
            }


            if(attacked.hp - damage > 1) {
                const hpAfterAttack = Math.round(attacked.hp - damage)
                await this.unitRepository.update({hp: hpAfterAttack}, {where : {customId: attacked.customId}})
                return `У юнита под номером ${attacked.customId} осталось ${hpAfterAttack} hp`
            } else {
                await this.unitRepository.destroy({where: {customId: attacked.customId}})
                return `Юнит под номером ${attacked.customId} был уничтожен противником`
            }

        }

        if (roleFromOfAttacker.role == "волшебник" && roleFromOfAttacker.radiusOfAttack >= distance) {

            let damage = 0
            let mana = attacker.mana

            if(mana/2 > 1) {
                damage += roleFromOfAttacker.baseDamage * 2
            } else {
                damage += roleFromOfAttacker.baseDamage / 2
            }

            if (attacked.magResist < damage) {
                damage -= attacked.magResist
            } else {
                const magResistAfterAttack = Math.round(attacked.magResist - damage)
                await this.unitRepository.update({magResist: magResistAfterAttack}, {where : {customId: attacked.customId}})
                return `У юнита под номером ${attacked.customId} осталось ${magResistAfterAttack} магической защиты и ${attacked.hp} hp`
            }

            if(attacked.hp - damage > 1) {
                const hpAfterAttack = Math.round(attacked.hp - damage)
                await this.unitRepository.update({hp: hpAfterAttack}, {where : {customId: attacked.customId}})
                return `У юнита под номером ${attacked.customId} осталось ${hpAfterAttack} hp`
            } else {
                await this.unitRepository.destroy({where: {customId: attacked.customId}})
                return `Юнит под номером ${attacked.customId} был уничтожен противником`
            }


        }

    }

}
