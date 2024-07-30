import { IsNotEmpty } from 'class-validator'

export class CreateGradeDto{
    @IsNotEmpty()
    grade_name:string;

    createdAt: string;
    
    updatedAt: string;
}