import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Leave } from './leave.entity';
import { Repository } from 'typeorm';
import { LeaveTypeId } from 'src/types/leaveType.type';

@Injectable()
export class LeaveService {
    constructor(@InjectRepository(Leave) private readonly leaveRepository:Repository<Leave>){}

    async findAll(){
        return this.leaveRepository.find({
            relations:["user","leave_type"]
        })
    }

    async save(leaveData){ 
        try{
            const response=await this.leaveRepository.save(leaveData);
            return response;
        }
        catch(e){
            return e.messsage
        }
    }

    async findOne(id:LeaveTypeId){
        try{
            const response=await this.leaveRepository.find({
                where:{
                    id:id
                }
            })
        }
        catch(e){
            return e.messsage
        }
    }

    async Update(id,updateData){
        
    }
}
