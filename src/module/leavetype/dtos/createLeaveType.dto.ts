import {IsNotEmpty} from "class-validator" 
import { LEAVE_TYPE } from "src/enum/leavetype.enum"

export class LeaveTypeDto{
    @IsNotEmpty()
    leave_type:LEAVE_TYPE;

    @IsNotEmpty()
    leave_description:string;

    @IsNotEmpty()
    max_day:number;

    createdAt: Date;

    updatedAt: Date;
}