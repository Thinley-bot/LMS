import { Column, Entity,JoinColumn,ManyToOne,OneToMany,OneToOne,PrimaryGeneratedColumn } from "typeorm";
import { Department } from "../department/department.entity";
import { Grade } from "../grade/grade.entity";
import { Role } from "../role/role.entity";
import { Leave } from "../leave/leave.entity";

@Entity("Users")
export class Users{
    @PrimaryGeneratedColumn('uuid')
    id:String

    @Column()
    employeeId:string;
   
    @Column()
    email:string;
    
    @Column({
        type:"varchar"
    })
    password:string;

    @Column()
    imgurl:string;

    @Column()
    role_id:string;
    
    @Column()
    grade_id:string;

    @Column()
    department_id:string

    @ManyToOne(() => Department, (department) => department.id)
    @JoinColumn({
        name:"department_id"
    })
    department: Department;

    @ManyToOne(()=>Grade,(grade)=>grade.id)
    @JoinColumn({
        name:"grade_id"
    })
    grade:Grade;

    @ManyToOne(()=>Role,(role)=>role.role_id)
    @JoinColumn({
        name:"role_id"
    })
    role:Role;

    @OneToMany(()=>Leave,(leave)=>leave.user)
    leave:Leave
}