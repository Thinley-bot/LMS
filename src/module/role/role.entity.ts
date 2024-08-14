import { Entity, PrimaryGeneratedColumn,Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Users } from "../users/users.entity";
import { Roles } from "src/enum/roles.enum";

@Entity()
export class Role{
    @PrimaryGeneratedColumn('uuid')
    role_id:string;

    @Column({
        type:"enum",
        enum:Roles,
        default:Roles.Employee
    })
    role:string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(()=>Users,(user)=>user.role)
    user:Users[];
}