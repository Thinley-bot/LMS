import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { JWTAuthGuard } from '../auth/guards/jwt.guard';
import { ProfileDto } from './dtos/Profile.dto';
import { GetUser } from 'src/decorators/getUser.decorator';

@Controller('profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService,
  ) {}

  @UseGuards(JWTAuthGuard)
  @Get()
  getProfiles() {
    return this.profileService.findAll();
  }

  @UseGuards(JWTAuthGuard)
  @Post()
  createProfile(@Body() profileData: ProfileDto, @GetUser() user) {
    if (!user || !user.userId) {
      throw new Error('User not found');
    }
    return this.profileService.addProfile(user.userId, profileData);
  }

}
