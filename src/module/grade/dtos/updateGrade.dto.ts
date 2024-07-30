import { CreateGradeDto } from "./createGrade.dto";
import { PartialType } from '@nestjs/mapped-types';

export class UpdateGradeDto extends PartialType(CreateGradeDto){}