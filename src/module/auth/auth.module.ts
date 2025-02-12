import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { Users } from '../users/users.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { config } from 'dotenv';
import { DepartmentModule } from '../department/department.module';

@Module({
imports: [TypeOrmModule.forFeature([Users]),UsersModule,
PassportModule,DepartmentModule],
controllers: [AuthController],
providers: [AuthService,LocalStrategy,JwtStrategy ],
})

export class AuthModule {}
