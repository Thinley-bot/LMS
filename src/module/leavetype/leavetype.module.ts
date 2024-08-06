import { Module } from '@nestjs/common';
import { LeavetypeController } from './leavetype.controller';
import { LeavetypeServiceImpl } from './leavetype.service';
import { LeaveType } from './leavetype.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([LeaveType])],
  controllers: [LeavetypeController],
  providers: [LeavetypeServiceImpl]
})
export class LeavetypeModule {}
