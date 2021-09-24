import { TasksService } from './tasks.service';
import { task, Prisma } from '@prisma/client';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(data: Prisma.taskCreateInput): Promise<task>;
    findAll(): Promise<task[]>;
    findOne(id: string): Promise<task>;
    update(id: string, data: Prisma.taskUpdateInput): Promise<task>;
    remove(id: string): Promise<task>;
}
