import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig:TypeOrmModuleOptions={
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'lms_dev',
    entities: ['dist/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,

    //set to false in the production
    // synchronize: true, 
  }