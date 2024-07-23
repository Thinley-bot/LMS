import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private userRepository:Repository<Users>) {}

    async findaUserByEmpId(employeeId: string): Promise<Users | null> {
        try {
            const user = await this.userRepository.findOne({ where: { employeeId } });
            return user || null;
        } catch (error) {
            throw new Error(`Failed to find user with employeeId ${employeeId}: ${error.message}`);
        }
    }

    async findaUserById(userId:number):Promise<Users | null>{
        try{
            const user=await this.userRepository.findOne({
                where:{
                    id:userId
                }
            })
            return user;
        }
        catch(e){
            throw new NotFoundException("User not found")
        }
    }

    
}
