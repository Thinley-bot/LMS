import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Leave } from './leave.entity';
import { Repository } from 'typeorm';
import { LeaveTypeId } from 'src/types/leaveType.type';
import { calculateTotalDays } from 'src/utility/CalculateTotalDays.util';

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
            console.error("Error saving leave data:", e);
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
            console.error("Error finding leave by id:", e);
            return e.message;
        }
    }

    // async update(id, updateData) {
    // }
}
