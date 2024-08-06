import { LEAVE_TYPE } from "src/enum/leavetype.enum";

export type LeaveTypeId = string;

export type CreateLeaveType = {
  leave_type: LEAVE_TYPE;
  leave_description: string;
  max_day: number;
  createdAt: Date;
  updatedAt: Date;
};

export type UpdateLeaveType = Partial<CreateLeaveType>;