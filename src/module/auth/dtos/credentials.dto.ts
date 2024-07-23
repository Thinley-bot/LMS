import { IS_STRONG_PASSWORD, IsNotEmpty, MinLength } from "class-validator";

export class UserCredentialsDto{
    @IsNotEmpty()
    @MinLength(7)
    employeeId:string;

    @IsNotEmpty()
    password:string;
}