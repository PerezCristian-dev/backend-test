import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SubscribeDto } from './suscribe.dto';
import { connection } from 'ws';
import { send } from 'process';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  connect() {
    this.appService.getSocket();
  }

  @Post()
  subscribe(@Body() subscribe: SubscribeDto): any {
    this.appService.subscribe(subscribe);
  }
}
