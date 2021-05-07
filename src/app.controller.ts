import { Controller, Get, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    throw new HttpException({
      status:HttpStatus.OK,
      error :"sadas"
      
    },HttpStatus.UNAUTHORIZED);
    return response.status(304);
  }
}
