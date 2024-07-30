import { Entity, PrimaryGeneratedColumn,Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Users } from "../users/users.entity";

@Entity()
export class Role{
    @PrimaryGeneratedColumn('uuid')
    role_id:string;

    @Column()
    role:string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(()=>Users,(user)=>user.role)
    user:Users[];
}