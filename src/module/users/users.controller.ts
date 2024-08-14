import { Controller, Get, Param, Patch, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersInterceptor } from './interceptors/users.interceptor';
import { EmployeeId, UserId } from 'src/types/employee.type';
import { UpdateUserDto } from './dtos/updateUsers.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Get()
    @UseInterceptors(UsersInterceptor)
    getUsers(){
        return this.usersService.findAll();
    }

    @Get(":id")
    getUser(@Param("id") id:EmployeeId){
        return this.usersService.findaUserByEmpId(id);
    }

    @Patch(":id")
    updateUser(@Param("id") id:EmployeeId,updateUserData:UpdateUserDto){
        return this.usersService.updateUser(id,updateUserData);
    }
    
}
