import { IsNotEmpty } from "class-validator";

export class ProfileDto{
    @IsNotEmpty()
    Department:string

    @IsNotEmpty()
    Grade:string;

    @IsNotEmpty()
    ImgUrl:string;
}