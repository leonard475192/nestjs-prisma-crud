import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { task, Prisma } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() data: Prisma.taskCreateInput): Promise<task> {
    return this.tasksService.create(data);
  }

  @Get()
  async findAll(): Promise<task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<task> {
    return this.tasksService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.taskUpdateInput,
  ): Promise<task> {
    return this.tasksService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<task> {
    return this.tasksService.remove(+id);
  }
}
