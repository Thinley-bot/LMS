import { Body, Controller, Get,HttpCode,Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dtos/users.dto';
import { UserCredentialsDto } from './dtos/credentials.dto';
import { LocalGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @UseGuards(LocalGuard)
    @Post('register')
    @HttpCode(200)
    async registerUser(@Body() userDetails:UserDto){
        return this.authService.registerUser(userDetails)
    }

    @UseGuards(LocalGuard)
    @Post('login')
    @HttpCode(200)
    async login(@Body() userCredentials:UserCredentialsDto ){
        return this.authService.validate(userCredentials)
    }

}
