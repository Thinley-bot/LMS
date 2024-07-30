import { Entity, PrimaryGeneratedColumn,Column, OneToMany, UpdateDateColumn, CreateDateColumn} from "typeorm";
import { Users } from "../users/users.entity";

@Entity("Department")
export class Department{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name:string;

    @Column()
    acronym:string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(()=>Users,(user)=>user.department)
    users:Users[]
}