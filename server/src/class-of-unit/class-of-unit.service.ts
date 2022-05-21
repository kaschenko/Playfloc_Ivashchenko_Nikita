import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {ClassOfUnit} from "./class-of-unit.model";
import {CreateClassDto} from "./dto/create-role.dto";

@Injectable()
export class ClassOfUnitService {

    constructor(@InjectModel(ClassOfUnit) private roleRepository: typeof ClassOfUnit) {

    }

    async createClass(dto: CreateClassDto) {
        const role = await this.roleRepository.create(dto)
        return role
    }

    async getClassByValue(value: string) {
        const role = await this.roleRepository.findOne({where: {role: value}})
        return role
    }


    async getAllClasses() {
        const role = await this.roleRepository.findAll()
        return role
    }

    async getClassById(idFromUnit: number) {
        const role = await this.roleRepository.findOne({where: {id: idFromUnit}})
        return role
    }

}
