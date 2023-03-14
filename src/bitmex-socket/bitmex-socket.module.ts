import { Module } from '@nestjs/common';
import { BitmexSocketService } from './bitmex-socket.service';
import { BitmexSocketResolver } from './bitmex-socket.resolver';
import { AppService } from '../app.service';

@Module({
  providers: [BitmexSocketResolver, BitmexSocketService],
  imports:[AppService]
})
export class BitmexSocketModule {}
