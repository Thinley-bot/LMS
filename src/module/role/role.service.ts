import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { Repository } from 'typeorm';
import { CreateRoleType, RoleTypeId, UpdateRoleType } from 'src/types/role.type';

interface RoleServiceItf {
    findAll(): Promise<Role[]>;
    findOne(id: RoleTypeId): Promise<Role | string>;
    save(roleData: CreateRoleType): Promise<string>;
    update(id: RoleTypeId, updateRoleData: UpdateRoleType): Promise<string>;
    delete(id: RoleTypeId): Promise<string>;
}

@Injectable()
export class RoleService implements RoleServiceItf {
    constructor(@InjectRepository(Role) private readonly roleRepository: Repository<Role>) {}

    async findAll(): Promise<Role[]> {
        return this.roleRepository.find();
    }

    async findOne(id: RoleTypeId): Promise<Role | string> {
        try {
            const response = await this.roleRepository.findOne({
                where: { role_id: id }
            });
            if (!response) {
                return "No Role Found";
            }
            return response;
        } catch (e) {
            return e.message;
        }
    }

    async save(roleData: CreateRoleType): Promise<string> {
        try {
            const response = await this.roleRepository.save(roleData);
            if (response) {
                return "Role saved successfully.";
            }
            return "Failed to save role.";
        } catch (e) {
            return e.message;
        }
    }

    async update(id: RoleTypeId, updateRoleData: UpdateRoleType): Promise<string> {
        try {
            await this.roleRepository.update(id, updateRoleData);
            return "Role updated successfully.";
        } catch (e) {
            return e.message;
        }
    }

    async delete(id: RoleTypeId): Promise<string> {
        try {
            await this.roleRepository.delete(id);
            return "Role deleted successfully.";
        } catch (e) {
            return e.message;
        }
    }
}
