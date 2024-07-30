import { Body, Controller, Post,Get, Patch, Param, HttpCode, Delete } from '@nestjs/common';
import { GradeService } from './grade.service';
import { CreateGradeDto } from './dtos/createGrade.dto';
import { UpdateGradeDto } from './dtos/updateGrade.dto';
import { GradeId } from 'src/types/grade.type';

@Controller('grade')
export class GradeController {
    constructor(private readonly gradeService: GradeService) { }

    /* To get all the Grades. */
    @Get()
    getGrades(){
        return this.gradeService.findAll();
    }

     /* To get the Grade by id. */
    @Get(":id")
    getGradeById(@Param("id") id:string){
        return this.gradeService.findOne(id);
    }

     /* To create the new grade */
    @Post()
    @HttpCode(200)
    createGrade(@Body() gradeDto:CreateGradeDto) {
        return this.gradeService.save(gradeDto);
    }
    
    @Patch(":id")
    updateGrade(@Param("id") id:GradeId, @Body() updateData:UpdateGradeDto){
        return this.gradeService.update(id,updateData);
    }

    /*To delete the grade*/
    @Delete(":id")
    deleteGrade(@Param("id") id:GradeId){
        return this.gradeService.delete(id);
    }
}
