import { Column, CreateDateColumn, Entity,JoinColumn,ManyToOne,OneToMany,OneToOne,PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Department, (department) => department.users)
    @JoinColumn({
        name:"department_id"
    })
    department: Department;

    @ManyToOne(()=>Grade,(grade)=>grade.user)
    @JoinColumn({
        name:"grade_id"
    })
    grade:Grade;

    @ManyToOne(()=>Role,(role)=>role.user)
    @JoinColumn({
        name:"role_id"
    })
    role:Role;

    @OneToMany(()=>Leave,(leave)=>leave.user)
    leave:Leave
}