import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';

@Injectable()
export class ProfileService {
    constructor(@InjectRepository(Profile) private readonly profileRepository:Repository<Profile>,
private readonly usersService:UsersService){}

    async findAll(){
       return await this.profileRepository.find()
    }

    async addProfile(userId: number, profileData: Partial<Profile>) {
        const user= await this.usersService.findaUserById(userId);
        if (!user) {
          throw new NotFoundException('User not found');
        }
            const newProfile = this.profileRepository.create({
          ...profileData,
          user,
        });
            return await this.profileRepository.save(newProfile);
      }
}
