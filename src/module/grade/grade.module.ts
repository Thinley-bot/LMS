import { Module } from '@nestjs/common';
import { GradeController } from './grade.controller';
import { GradeService } from './grade.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grade } from './grade.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Grade])],
  controllers: [GradeController],
  providers: [GradeService]
})
export class GradeModule {}
