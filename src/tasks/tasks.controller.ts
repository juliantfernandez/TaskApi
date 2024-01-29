import { Controller, Get, Post, Param, Body, Put, Delete} from '@nestjs/common';
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
    findOne(@Param('id') id: string){
        return this.TaskService.findOne(id)
    }

    @Delete(':id')
    delete(@Param('id') id: string){
            return this.TaskService.delete(id)
       
    }

    @Post()
    create(@Body() createTaskDto: createTaskDto){
        return this.TaskService.create(createTaskDto)
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() updateTaskDto: updateTaskDto ){
        return this.TaskService.update(id, updateTaskDto)
    }


}

