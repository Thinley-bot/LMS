import { LEAVE_STATUS } from "src/enum/leavestatus.enum"

export type CreateLeaveType={
    start_date:Date,
    end_date:Date,
    total_days:number,
    purpose:string,
    status:LEAVE_STATUS,
    employee_id:string,
    leave_type_id:string,
    createdAt:Date,
    updatedAt:Date,
}

export type LeaveId=string;

export type UpdateLeaveType=Partial<CreateLeaveType>;