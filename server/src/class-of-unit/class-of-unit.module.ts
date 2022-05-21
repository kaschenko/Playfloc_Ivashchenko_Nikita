import { Module } from '@nestjs/common';
import { ClassOfUnitService } from './class-of-unit.service';
import { ClassOfUnitController } from './class-of-unit.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {ClassOfUnit} from "./class-of-unit.model";

@Module({
  providers: [ClassOfUnitService],
  controllers: [ClassOfUnitController],
  imports: [
      SequelizeModule.forFeature([ClassOfUnit])
  ],
  exports: [
      ClassOfUnitService
  ]
})
export class ClassOfUnitModule {}
