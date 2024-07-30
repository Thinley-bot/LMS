import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
// import { UsersInterceptor } from './interceptors/users.interceptor';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Get()
    // @UseInterceptors(UsersInterceptor)
    getUsers(){
        return this.usersService.findAll();
    }

    getUser(employeeId:string){
        return this.usersService.findaUserByEmpId(employeeId);
    }

    updateUser(employeeId:string){
        return this.usersService.updateUser(employeeId);
    }
    
}
