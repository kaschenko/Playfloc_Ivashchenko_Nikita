import { Module } from '@nestjs/common';
import { UnitController } from './unit.controller';
import { UnitService } from './unit.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Unit} from "./unit.model";
import {ClassOfUnitModule} from "../class-of-unit/class-of-unit.module";

@Module({
  controllers: [UnitController],
  providers: [UnitService],
  imports: [
      SequelizeModule.forFeature([Unit]),
      ClassOfUnitModule
  ]
})
export class UnitModule {}
