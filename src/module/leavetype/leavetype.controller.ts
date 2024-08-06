// src/controllers/leavetype.controller.ts
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LeavetypeService, LeavetypeServiceImpl } from './leavetype.service';
import { LeaveTypeId } from 'src/types/leaveType.type';
import { LeaveTypeDto } from './dtos/createLeaveType.dto';
import { UpdateLeaveTypeDto } from './dtos/updateLeaveType.dto';

@Controller('leavetype')
export class LeavetypeController {
  constructor(private readonly leaveTypeService: LeavetypeServiceImpl) {}

  @Get()
  getLeaveTypes() {
    return this.leaveTypeService.findAll();
  }

  @Get(':id')
  getLeaveType(@Param('id') id: LeaveTypeId) {
    return this.leaveTypeService.findOne(id);
  }

  @Post()
  createLeaveType(@Body() leaveTypeData: LeaveTypeDto) {
    return this.leaveTypeService.save(leaveTypeData);
  }

  @Patch(':id')
  updateLeaveType(
    @Param('id') id: LeaveTypeId,
    @Body() updateLeaveTypeData: UpdateLeaveTypeDto,
  ) {
    return this.leaveTypeService.update(id, updateLeaveTypeData);
  }

  @Delete(':id')
  deleteLeaveType(@Param('id') id: LeaveTypeId) {
    return this.leaveTypeService.delete(id);
  }
}
