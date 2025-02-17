/**
 * main controller of your application
 * 
 * controller handels incoming resquests and return responses
 * 
 * when ever request made to our application it come to it
 * 
 * it also responsible for sending response
 * 
 */

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
