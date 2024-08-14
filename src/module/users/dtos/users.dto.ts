import { IsNotEmpty,IsEmail, MinLength } from "class-validator";


export class UserDto{
    @IsNotEmpty({message:"The EmployeeId is required"})
    @MinLength(7)
    employeeId:string;

    @IsNotEmpty({message:"The Working Email is required"})
    @IsEmail()
    email:string;

    @IsNotEmpty({message:"The Password is required"})
    @MinLength(8)
    password:string;

    @MinLength(8)
    @IsNotEmpty({message:"The ConfirmPassword is required"})
    confirmPassword: string;

    @IsNotEmpty()
    imgurl:string;

    @IsNotEmpty()
    role_id:string;

    @IsNotEmpty()
    grade_id:string;

    @IsNotEmpty()
    department_id:string;
}