import { IsNotEmpty } from "class-validator";
import { LEAVE_STATUS } from "src/enum/leavestatus.enum";

export class CreateLeaveDto{
    @IsNotEmpty()
    start_date:Date;

    @IsNotEmpty()
    end_date:Date;

    @IsNotEmpty()
    total_days:number;

    @IsNotEmpty()
    purpose:string;

    @IsNotEmpty()
    status:LEAVE_STATUS;

    @IsNotEmpty()
    employee_id:string;

    @IsNotEmpty()
    leave_type_id:string;

    createdAt: Date;

    updatedAt: Date;
}