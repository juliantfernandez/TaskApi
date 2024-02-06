import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
  }),
    MongooseModule.forRoot(process.env.DB_URI), TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
