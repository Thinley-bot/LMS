import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CheckMatching } from 'src/utility/PasswordMatching.util';
import { UsersService } from '../users/users.service'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../users/users.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { DepartmentService } from '../department/department.service';
import { User_Detail_Type,User_Credential_Type} from 'src/types/auth.type';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(Users) private readonly userRepository:Repository<Users>,
  private readonly departmentService:DepartmentService,
    private readonly usersService: UsersService,
    private jwtService:JwtService) {}

    async registerUser(userDetails:User_Detail_Type) {
      const { employeeId, email, password, confirmPassword, department_id} = userDetails;
      CheckMatching(password, confirmPassword);
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(password, saltOrRounds);
    
      const userCredentials = {
        ...userDetails,
        password: hash,
      };
    
      try {
        const user = await this.usersService.findaUserByEmpId(employeeId);
        if (user) {
          throw new UnauthorizedException('User Already exists');
        }
    
        if (!CheckMatching(password, confirmPassword)) {
          return 'The password and password confirmation should match.';
        } else {
          const department = await this.departmentService.findOne(department_id);
          console.log('Found department:', department);
          if (!department) {
            throw new NotFoundException('Department not found');
          } else {
            await this.userRepository.save(userCredentials);
            return 'Employee Registered Successfully';
          }
        }
      } catch (e) {
        return `The error occurred while registering user: ${e.message}`;
      }
    }
    
    

  async validate(userCredentials:User_Credential_Type) {
    const { employeeId,password} = userCredentials;

    const user = await this.usersService.findaUserByEmpId(employeeId);
    if (!user) {
      throw new UnauthorizedException("The user doesn't exist!");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid Password');
    }
    const {password:userPassword,id,email,imgurl,role_id,grade_id,department_id,createdAt,updatedAt,...users}=user;
    return  this.jwtService.sign(users);
  }

  async validateUser(userCredentials:User_Credential_Type): Promise<any> {
    const {employeeId,password}=userCredentials;
    const user = await this.usersService.findaUserByEmpId(employeeId);
  if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async validateJwtUser(employeeId:string):Promise<Object>{
    const user = await this.usersService.findaUserByEmpId(employeeId);
    const currentUser={id:user.employeeId,role:user.role.role}
    return currentUser;
  }
}
