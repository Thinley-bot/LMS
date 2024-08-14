import { SetMetadata } from '@nestjs/common';
import { Roles } from 'src/enum/roles.enum';

export const UserRoles = (...roles: Roles[]) => SetMetadata('roles', roles);