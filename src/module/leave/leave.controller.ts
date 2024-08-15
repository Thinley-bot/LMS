import { Body, Controller, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { LeaveService } from './leave.service';
import { CreateLeaveDto } from './dtos/createLeave.dto';
import {  UserRoles } from '../role/decorators/roles.decorator';
import {Roles as UserRole} from "../../enum/roles.enum"
import { JWTAuthGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/auth.guard';
import { LeaveId } from 'src/types/leave.type';
import { UpdateLeaveDto } from './dtos/updateLeave.dto';

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

    @Get(":id")
    getLeave(@Param("id") id:LeaveId){
        return this.leaveService.findOne(id)
    }

    @Post()
    create(@Body() createLeaveDto: CreateLeaveDto) {
        return this.leaveService.save(createLeaveDto);
    }

    @Patch(":id")
    updateLeave(@Param("id") id:LeaveId,@Body() updateLeaveData:UpdateLeaveDto){
        return this.updateLeave(id,updateLeaveData);
    }

    
}
