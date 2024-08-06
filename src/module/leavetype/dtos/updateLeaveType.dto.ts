import { PartialType } from '@nestjs/mapped-types';
import { LeaveTypeDto } from './createLeaveType.dto';

export class UpdateLeaveTypeDto extends PartialType(LeaveTypeDto) {}