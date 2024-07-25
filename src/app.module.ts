import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './module/auth/auth.module';
import { UsersModule } from './module/users/users.module';
import { DepartmentController } from './module/department/department.controller';
import { DepartmentModule } from './module/department/department.module';
import { RoleModule } from './module/role/role.module';
import { GradeModule } from './module/grade/grade.module';
import { LeaveModule } from './module/leave/leave.module';
import { LeavetypeService } from './module/leavetype/leavetype.service';
import { LeavetypeModule } from './module/leavetype/leavetype.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '60m' },
      }),
      inject: [ConfigService],
      global: true,
    }),
    AuthModule,
    UsersModule,
    DepartmentModule,
    RoleModule,
    GradeModule,
    LeaveModule,
    LeavetypeModule,
  ],
  controllers: [AppController, DepartmentController],
  providers: [AppService, LeavetypeService],
})
export class AppModule {}
