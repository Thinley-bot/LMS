import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleTypeId } from 'src/types/role.type';
import { CreateRoleDto } from './dtos/createRole.dto';
import { UpdateRoleDto } from './dtos/updateRole.dto';

@Controller('role')
export class RoleController {
    constructor(private readonly roleService:RoleService){}

    @Get()
    getRoles(){
        return this.roleService.findAll()
    }

    @Get(":id")
    getRole(@Param("id") id:RoleTypeId){
        return this.roleService.findOne(id)
    }

    @Post()
    createRole(@Body() roleData:CreateRoleDto){
        return this.roleService.save(roleData)
    }

    @Patch(":id")
    updateRole(@Param("id") id:RoleTypeId,updateRoleData:UpdateRoleDto){
        return this.roleService.update(id,updateRoleData);
    }

    @Delete(":id")
    deleteRole(@Param("id") id:RoleTypeId){
        return this.roleService.delete(id)
    }
}
