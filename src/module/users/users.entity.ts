import { IsEmail, MinLength } from "class-validator";
import { Column, Entity,OneToOne,PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "../profile/profile.entity";

@Entity("Users")
export class Users{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:"varchar"
    })
    @MinLength(7)
    employeeId:string;

    @Column({
        type:"varchar"
    })
    @IsEmail()
    email:string;
    
    @Column({
        type:"varchar"
    })
    password:string;

    @OneToOne(()=>Profile,(profile)=>profile.user)
    profile:Profile;

}