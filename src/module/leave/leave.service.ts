import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Leave } from './leave.entity';
import { Repository } from 'typeorm';
import { LeaveTypeId } from 'src/types/leaveType.type';
import { calculateTotalDays } from 'src/utility/CalculateTotalDays.util';
import { LeaveId } from 'src/types/leave.type';

@Injectable()
export class LeaveService {
    constructor(@InjectRepository(Leave) private readonly leaveRepository: Repository<Leave>) {}

    async findAll() {
        return this.leaveRepository.find({
            relations: ["user", "leave_type"]
        });
    }

    async save(leaveData): Promise<string | object> {
        console.log("hit the leave save route");
        const { start_date, end_date } = leaveData;
        const total_days = calculateTotalDays(start_date, end_date);
        console.log(total_days);
        try {
            const response = await this.leaveRepository.save({ total_days: total_days, ...leaveData });
            if (!response) {
                return "Leave application failed!";
            }
            return "Leave Applied Successfully.";
        } catch (e) {
            return e.message;
        }
    }

    async findOne(id: LeaveTypeId) {
        try {
            const response = await this.leaveRepository.findOne({
                where: { id: id },
                relations: ["user", "leave_type"]
            });
            return response;
        } catch (e) {
            return e.message;
        }
    }

    async update(id, updateData) {
        const existingLeave=await this.leaveRepository.findOne(id);
        try{
            const response = await this.leaveRepository.save({...existingLeave,...updateData})
            if(response){
                return "Leave Successfully Applied"
            }
        }catch(e){
            return e.message
        }
    }

    async delete(id:LeaveId){
        const exitingLeave=await this.findOne(id);
        if(!exitingLeave){
            return new NotFoundException("Leave Not Found")
        }
        try{
            const response= await this.leaveRepository.remove(exitingLeave);
            if(response){
                return "Deleted the leave successfully"
            }
        }catch(e){
            return e.message
        }
    }
}
