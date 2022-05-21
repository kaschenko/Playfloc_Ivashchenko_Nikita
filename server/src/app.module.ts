import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { ClassOfUnitModule } from './class-of-unit/class-of-unit.module';
import { UnitModule } from './unit/unit.module';
import {ClassOfUnit} from "./class-of-unit/class-of-unit.model";
import {Unit} from "./unit/unit.model";
import {ConfigModule} from "@nestjs/config";


@Module({
    controllers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Unit, ClassOfUnit],
            autoLoadModels: true
        }),
        ClassOfUnitModule,
        UnitModule,
    ],
})
export class AppModule {

}