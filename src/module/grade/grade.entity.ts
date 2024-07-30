import { Entity, PrimaryGeneratedColumn,Column, OneToMany, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Users } from "../users/users.entity";

@Entity("grade")
export class Grade{
    @PrimaryGeneratedColumn('uuid')
    grade_id:string;

    @Column()
    grade_name:string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(()=>Users,(user)=>user.grade)
    user:Users[];
}