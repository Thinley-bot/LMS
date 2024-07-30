import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import {employee_Id, user_id} from "../../types/employee.type"

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private userRepository:Repository<Users>) {}

    async findaUserByEmpId(employeeId:employee_Id): Promise<Users | null> {
        try {
            const user = await this.userRepository.findOne({ where: { employeeId } });
            return user || null;
        } catch (error) {
            throw new Error(`Failed to find user with employeeId ${employeeId}: ${error.message}`);
        }
    }

    async findUserById(userId:user_id):Promise<Users | null>{
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

    async updateUser(employee_Id:employee_Id){
        let user=this.findUserById(employee_Id);
        if(!user){
            return new  NotFoundException("User Not Found!")
        }
        else{
            
        }
    }
}
