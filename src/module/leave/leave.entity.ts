import { Column, Entity, JoinColumn, PrimaryGeneratedColumn,ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Users } from "../users/users.entity";
import { LeaveType } from "../leavetype/leavetype.entity";

@Entity()
export class Leave{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    start_date:string;

    @Column()
    end_date:string;

    @Column()
    total_days:number;

    @Column()
    purpose:string;

    @Column()
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