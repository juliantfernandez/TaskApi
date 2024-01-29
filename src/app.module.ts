import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://juliantfernandez0611:juliantfernandez0611@cluster0.h7q46ae.mongodb.net/?retryWrites=true&w=majority'), TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
