import { IsNotEmpty, IsString, IsBoolean, IsOptional } from "class-validator";
export class createTaskDto{
@IsString()
@IsNotEmpty()
title: string;

@IsString()
@IsNotEmpty()
description: string; 

@IsBoolean()
@IsOptional()
done?: boolean;
}