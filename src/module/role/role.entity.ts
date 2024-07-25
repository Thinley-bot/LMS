import { Entity, PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";
import { Users } from "../users/users.entity";

@Entity()
export class Role{
    @PrimaryGeneratedColumn('uuid')
    role_id:string;

    @Column()
    role:string;

    @OneToMany(()=>Users,(user)=>user.id)
    user:Users[];
}