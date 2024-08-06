import { Injectable } from '@nestjs/common';
import { LeaveType } from './leavetype.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLeaveType, LeaveTypeId, UpdateLeaveType } from 'src/types/leaveType.type';

export abstract class LeavetypeService {
    abstract findOne(id:LeaveTypeId): Promise<LeaveType | null>;
    abstract findAll(): Promise<LeaveType[] | object>;
    abstract save(leaveTypeData: LeaveType): Promise<string>;
    abstract update(id: LeaveTypeId, updateLeaveTypeData: UpdateLeaveType): Promise<string | object>;
    abstract delete(id: LeaveTypeId): Promise<string>;
}

@Injectable()
export class LeavetypeServiceImpl implements LeavetypeService {
    constructor(@InjectRepository(LeaveType) private readonly leaveRepository: Repository<LeaveType>) {}

    async findOne(id: LeaveTypeId): Promise<LeaveType | null> {
        try {
            const leaveType = await this.leaveRepository.findOne({ where: { id:id } });
            return leaveType || null;
        } catch (e) {
            console.error(e.message);
            return null;
        }
    }

    async findAll(): Promise<LeaveType[] | object> {
        try {
            return await this.leaveRepository.find();
        } catch (e) {
            return e.message;
        }
    }

    async save(leaveType: CreateLeaveType): Promise<string> {
        try {
            await this.leaveRepository.save(leaveType);
            return 'Leave type saved successfully';
        } catch (e) {
            console.error(e.message);
            return 'Failed to save leave type';
        }
    }

    async update(id: LeaveTypeId, updateLeaveTypeData:UpdateLeaveType): Promise<string | object> {
        try {
            const exitingLeaveType=await this.findOne(id)
            if(!exitingLeaveType){
                return "LeaveType doesn't exit"
            }
            else{
                const response=await this.leaveRepository.save({
                    ...exitingLeaveType,
                    ...updateLeaveTypeData,
                    createdAt:exitingLeaveType.createdAt ?? updateLeaveTypeData.createdAt,
                    updatedAt:exitingLeaveType.updatedAt ?? updateLeaveTypeData.updatedAt,
                })
                if(response){
                    return 'Leave type updated successfully';
                }
            }
        } catch (e) {
            return e.message
        }
    }

    async delete(id:LeaveTypeId): Promise<string> {
        try {
            await this.leaveRepository.delete(id);
            return 'Leave type deleted successfully';
        } catch (e) {
            return e.message
        }
    }
}
