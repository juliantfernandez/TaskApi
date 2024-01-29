import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import { Task } from 'src/schemas/task.schema';
import { Model } from 'mongoose';
import { createTaskDto } from 'src/dto/create-task.dto';
import { updateTaskDto } from 'src/dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>){}

    async findAll(){
     return this.taskModel.find();
    }

    async create(createTask: createTaskDto): Promise <Task>{
        const createdTask = new this.taskModel(createTask)
        return createdTask.save()
    }

   async findOne(id: string): Promise <Task>{
        return this.taskModel.findById(id)
    }

   async delete(id: string): Promise <Task>{
        return this.taskModel.findByIdAndDelete(id)
    }

   async update(id:string, tasks: updateTaskDto): Promise <Task>{
       return this.taskModel.findByIdAndUpdate(id, tasks, {new: true})
    }
}
