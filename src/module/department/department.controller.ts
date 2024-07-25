import { Body, Controller, Get,HttpCode,Post } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dtos/createDepartment.dto';

@Controller('department')
export class DepartmentController {
    constructor(private readonly departmentService:DepartmentService){}
    
    @Get()
    getDepartments(){
        return this.departmentService.findAll();
    }

    @Post()
    @HttpCode(200)
    createDepartment(@Body() department:CreateDepartmentDto){
        console.log(department)
        return this.departmentService.save(department)
    }

}
