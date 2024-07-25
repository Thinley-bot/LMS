import { Entity, PrimaryGeneratedColumn,Column, OneToMany} from "typeorm";
import { Users } from "../users/users.entity";

@Entity("grade")
export class Grade{
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    grade_name:string;

    @OneToMany(()=>Users,(user)=>user.id)
    user:Users[];
}