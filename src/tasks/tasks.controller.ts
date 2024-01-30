import { Controller, Get, Post, Param, Body, Put, Delete, ConflictException, NotFoundException, HttpCode} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto } from 'src/dto/create-task.dto';
import { updateTaskDto } from 'src/dto/update-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private TaskService: TasksService){}
    @Get()
    findAll(){
        return this.TaskService.findAll()
    }

    @Get(':id')
   async findOne(@Param('id') id: string){
      const task = await this.TaskService.findOne(id)
      if(!task) throw new NotFoundException('task was not found')
      return task
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string){
            const taskDeleted = await this.TaskService.delete(id)
            if(!taskDeleted) throw new NotFoundException('task was deleted')
            return taskDeleted
    }

    @Post()
    async create(@Body() createTaskDto: createTaskDto){
        try{
            return await this.TaskService.create(createTaskDto)
        }catch(error){
            if(error.code == 11000){
                throw new ConflictException('Task was created')
            }
            throw error;
        }
       
        
    }

    @Put(':id')
   async update(@Param('id') id:string, @Body() updateTaskDto: updateTaskDto ){
        const taskUpdated = await this.TaskService.update(id, updateTaskDto)
        if(!taskUpdated) throw new NotFoundException('task not found')
        return taskUpdated
    }


}

