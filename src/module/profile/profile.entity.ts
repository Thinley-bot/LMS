import { Column, PrimaryGeneratedColumn,Entity, OneToOne, JoinColumn } from "typeorm";
import { Users } from "../users/users.entity";

@Entity("Profile")
export class Profile{
    @PrimaryGeneratedColumn()
    id:string;

    @Column({
        type:"varchar"
    })
    Department:string;

    @Column({
        type:"varchar"
    })
    Grade:string;

    @Column({
        type:"varchar"
    })
    ImgUrl:string;

    @OneToOne(()=>Users,(user)=>user.profile)
    @JoinColumn()
    user:Users
}