import { Body, Controller, Delete, Get,HttpCode,Param,Patch,Post } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dtos/createDepartment.dto';
import { DepartmentId } from 'src/types/department.type';
import { UpdateDepartmentDto } from './dtos/updateDepartment.dto';

@Controller('department')
export class DepartmentController {
    constructor(private readonly departmentService:DepartmentService){}
    
    @Get()
    getDepartments(){
        return this.departmentService.findAll();
    }
    
    @Get(":id")
    getDepartment(@Param("id") id:DepartmentId){
        return this.departmentService.findOne(id);
    }

    @Post()
    @HttpCode(200)
    createDepartment(@Body() department:CreateDepartmentDto){
        return this.departmentService.save(department);
    }

    @Patch(":id")
    updateDepartment(@Param("id") id:DepartmentId,@Body() updateData:UpdateDepartmentDto){
        return this.departmentService.update(id,updateData);
    }

    @Delete(":id")
    deleteDepartment(@Param("id") id:DepartmentId){
        return this.departmentService.delete(id);
    }
}
