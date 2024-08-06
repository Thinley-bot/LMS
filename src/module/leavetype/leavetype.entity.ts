import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Leave } from "../leave/leave.entity";
import { LEAVE_TYPE } from "src/enum/leavetype.enum";

@Entity()
export class LeaveType{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type:'enum',
        enum:LEAVE_TYPE,
        // default:LEAVE_TYPE.casual
    })
    leave_type:LEAVE_TYPE;

    @Column()
    leave_description:string;

    @Column()
    max_day:number;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(()=>Leave,(leave)=>leave.leave_type)
    leave:Leave;
}