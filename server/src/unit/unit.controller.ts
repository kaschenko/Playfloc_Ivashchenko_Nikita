import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateUnitDto} from "./dto/create-unit.dto";
import {UnitService} from "./unit.service";
import {AddClassDto} from "./dto/addClass.dto";
import {AttackDto} from "./dto/attack.dto";

@Controller('api/unit')
export class UnitController {

    constructor(private unitService: UnitService) {}

    @Post('/create')
    create(@Body() unitDto: CreateUnitDto) {
        return this.unitService.createUnit(unitDto)
    }
    @Get('/list')
    getAll() {
        return this.unitService.getAllUnits()
    }
    @Post('/edit')
    editUnit(@Body() unitDto: CreateUnitDto) {
        return this.unitService.editUnit(unitDto)
    }
    @Post('/remove')
    removeUnit(@Body() customId: number) {
        return this.unitService.removeUnit(customId)
    }

    @Post('/addClass')
    addClass(@Body() dto: AddClassDto) {
        return this.unitService.addClass(dto)
    }

    @Post('/attack')
    attack(@Body() dto: AttackDto) {
        return this.unitService.attack(dto)
    }

}
