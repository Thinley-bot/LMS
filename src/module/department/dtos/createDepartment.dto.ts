import {IsNotEmpty} from 'class-validator'

export class CreateDepartmentDto{
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    acronym:string;

    createdAt: string;
    
    updatedAt: string;
}