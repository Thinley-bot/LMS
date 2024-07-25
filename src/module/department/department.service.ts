import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {
    constructor(
        @InjectRepository(Department)
        private departmentRepository: Repository<Department>,
    ) {}

    async findAll(): Promise<Department[]> {
        return await this.departmentRepository.find();
    }

    async save(department):Promise<String | null>{
        try{
        const response=await this.departmentRepository.save(department);
        if(response){
            return "Department Created Successfully"
        }
        }
        catch(e){
            return `Cannot create department:${e}`
        }
    }

    async findById(departmentId: string): Promise<Department | null> {
        console.log("hit")
        const department = await this.departmentRepository.findOne({
          where: { id: departmentId },
        });
        if (!department) {
          throw new NotFoundException('Department not found');
        }
        return department;
      }
    }

