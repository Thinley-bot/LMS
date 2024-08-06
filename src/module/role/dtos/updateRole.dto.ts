import { CreateRoleDto } from "./createRole.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateRoleDto extends PartialType(CreateRoleDto){}