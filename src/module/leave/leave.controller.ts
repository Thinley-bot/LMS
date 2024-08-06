import { Body, Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { LeaveService } from './leave.service';
import { CreateLeaveDto } from './dtos/createLeave.dto';
@Controller('leave')
export class LeaveController {
    constructor(private readonly leaveService:LeaveService){}
    
    @Get()
    getLeaves(){
        return this.leaveService.findAll();
    }

    @Post()
    createLeave(@Body() leaveData:CreateLeaveDto){
        return this.leaveService.save(leaveData)
    }

}
