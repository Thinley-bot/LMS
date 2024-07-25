import { Entity, PrimaryGeneratedColumn,Column, OneToMany} from "typeorm";
import { Users } from "../users/users.entity";

@Entity("Department")
export class Department{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name:string;

    @Column()
    acronym:string;

    @OneToMany(()=>Users,(user)=>user.department)
    users:Users[]
}