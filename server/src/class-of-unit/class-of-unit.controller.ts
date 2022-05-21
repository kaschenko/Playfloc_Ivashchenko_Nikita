import {Body, Controller, Get, Post} from '@nestjs/common';
import {ClassOfUnitService} from "./class-of-unit.service";
import {CreateClassDto} from "./dto/create-role.dto";

@Controller('api/role')
export class ClassOfUnitController {
    constructor(private roleService: ClassOfUnitService) {
    }

    @Post()
    create(@Body() unitDto: CreateClassDto) {
        return this.roleService.createClass(unitDto)
    }
    @Get()
    getAllClasses() {
        return this.roleService.getAllClasses()
    }
}
