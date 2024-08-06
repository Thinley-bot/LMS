import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './department.entity';
import { Repository } from 'typeorm';
import {DepartmentId, PartialUpdateDepartment } from 'src/types/department.type';

@Injectable()
export class DepartmentService {
    constructor(
        @InjectRepository(Department)
        private departmentRepository: Repository<Department>,
    ) {}

    async findAll(): Promise<Department[]> {
        return await this.departmentRepository.find();
    }

    async save(department):Promise<string>{
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

    async findOne(departmentId: string): Promise<Department | null> {
        const department = await this.departmentRepository.findOne({
          where: { id: departmentId },
        });
        if (!department) {
          throw new NotFoundException('Department not found');
        }
        return department;
      }
    
    async update(id:DepartmentId,updateData:PartialUpdateDepartment):Promise<Object | string>{
      const existingDpt=await this.findOne(id);
      if(!existingDpt){
        return new NotFoundException("Department Not Found")
      }
      else{
        const response=this.departmentRepository.save({
          ...existingDpt,
          ...updateData,
          createdAt:existingDpt.createdAt ?? updateData.createdAt,
          updatedAt:existingDpt.createdAt ?? updateData.updatedAt,
        })
        if(response){
          return "Department updated successfully."
        }
      }
    }

    async delete(id:DepartmentId):Promise<Object| string>{
      const depExist=await this.findOne(id)
      if(!depExist){
          return  new NotFoundException("Department not Found")
      }
      else{
          const response=await this.departmentRepository.remove(depExist)
          if(response){
              return "Department deleted successfully."
          }
      }
  }

}

