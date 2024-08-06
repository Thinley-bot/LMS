import { Column, Entity, JoinColumn, PrimaryGeneratedColumn,ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Users } from "../users/users.entity";
import { LeaveType } from "../leavetype/leavetype.entity";
import { type } from "os";
import { LEAVE_STATUS } from "src/enum/leavestatus.enum";

@Entity()
export class Leave{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    start_date:Date;

    @Column()
    end_date:Date;

    @Column()
    total_days:number;

    @Column()
    purpose:string;

    @Column(
        {
            type:"enum",
            enum:LEAVE_STATUS,
            default:LEAVE_STATUS.draft
        }

    )
    status:string;

    @Column()
    employee_id:string;

    @Column()
    leave_type_id:string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(()=>Users,(user)=>user.leave)
    @JoinColumn({
        name:"employee_id"
    })
    user:Users;

    @ManyToOne(()=>LeaveType,(leavetype)=>leavetype.leave)
    @JoinColumn({
        name:"leave_type_id"
    })
    leave_type:LeaveType;
}