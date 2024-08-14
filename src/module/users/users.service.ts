import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import {EmployeeId,UserId} from "../../types/employee.type"
import { UpdateUserType } from 'src/types/auth.type';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private userRepository:Repository<Users>) {}

    async findaUserByEmpId(employeeId:EmployeeId): Promise<Users | null> {
        try {
            const user = await this.userRepository.findOne({ where: { employeeId },relations:["role"]});
            return user || null;
        } catch (error) {
            throw new Error(`Failed to find user with employeeId ${employeeId}: ${error.message}`);
        }
    }

    async findUserById(userId:UserId):Promise<Users | null>{
        try{
            const user=await this.userRepository.findOne({
                where:{
                    id:userId,
                }
            })
            return user;
        }
        catch(e){
            throw new NotFoundException("User not found")
        }
    }

    async findAll():Promise<Users[] | null>{
        return this.userRepository.find({relations:['department']})
    }

    async updateUser(employee_Id:EmployeeId,UserData:UpdateUserType){
        let existingUser=this.findUserById(employee_Id);
        if(!existingUser){
            return new  NotFoundException("User Not Found!")
        }
        try{
            const response=this.userRepository.save({...existingUser,...UserData})
            if(response){
                return "User Successfully Updated"
            }
        }catch(e){
            return e.message
        }
        
    }
}
