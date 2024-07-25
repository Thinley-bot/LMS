import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Leave } from "../leave/leave.entity";

@Entity()
export class LeaveType{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    leave_type:string;

    @Column()
    leave_description:string;

    @Column()
    max_day:number;

    @OneToMany(()=>Leave,(leave)=>leave.leave_type)
    leave:Leave;
}