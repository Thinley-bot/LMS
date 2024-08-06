import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Grade } from './grade.entity';
import { Repository } from 'typeorm';
import { CreateGrade, GradeId,OptionalUpdateGrade} from 'src/types/grade.type';

@Injectable()
export class GradeService {
    constructor(@InjectRepository(Grade) private readonly gradeRepository:Repository<Grade> ){}

    async save(gradeDto:CreateGrade):Promise<String | null>{
        try{
            const Response=await this.gradeRepository.save(gradeDto)
            if(Response){
                return "Grade Successfully created."
            }
        }
        catch(e){
            return `Unable to create grade ${e.message}`
        }
    }

    async findAll():Promise<Grade[] | null>{
        try{
            return await this.gradeRepository.find()
        }
        catch(e){
            return e.message
        }
        
    }

    async findOne(id:GradeId):Promise<Grade[] | null>{
        try {
            return await this.gradeRepository.find({
                where:{
                    grade_id:id
                }
            })
        }
        catch(e){
            return e.message
        }
    }

    async update(id:GradeId,updateData:OptionalUpdateGrade):Promise<String | null>{
        try{
            const grade=await this.gradeRepository.findOne({
                where:{
                    grade_id:id
                }
            });
            const response=await this.gradeRepository.save(
                {
                    ...grade,
                    ...updateData,
                    createdAt:updateData.createdAt ?? grade.createdAt,
                    updatedAt:updateData.updatedAt ?? grade.updatedAt});
            if(response){
                return "Grade updated successfully"
            }
        }
        catch(e){
            return e.message;
        }
    }

    async delete(id:GradeId):Promise<Object| String>{
        const userExist=await this.gradeRepository.findOneBy({
            grade_id:id
        })
        if(!userExist){
            return  new NotFoundException("Grade not Found")
        }
        else{
            const response=await this.gradeRepository.remove(userExist)
            if(response){
                return "Grade deleted successfully."
            }
        }
    }

    
}
