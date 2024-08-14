import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { LeaveService } from './leave.service';
import { CreateLeaveDto } from './dtos/createLeave.dto';
import {  UserRoles } from '../role/decorators/roles.decorator';
import {Roles as UserRole} from "../../enum/roles.enum"
import { JWTAuthGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/auth.guard';

@Controller('leave')
export class LeaveController {
    constructor(private readonly leaveService:LeaveService){}
    
    @UserRoles(UserRole.Director)
    @UseGuards(RolesGuard)
    @UseGuards(JWTAuthGuard)
    @Get()
    getLeaves(){
        return this.leaveService.findAll();
    }

    @Post()
    async create(@Body() createLeaveDto: CreateLeaveDto) {
        return this.leaveService.save(createLeaveDto);
    }

}
