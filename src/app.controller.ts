import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SubscribeDto } from './suscribe.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  connect() {
    this.appService.getSocket();
  }

  @Post()
  subscribe(@Body() subscribe: SubscribeDto): any {
    console.log({subscribe})
    this.appService.subscribe(subscribe);
  }
}
