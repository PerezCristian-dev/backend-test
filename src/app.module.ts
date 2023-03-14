import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BitmexSocketModule } from './bitmex-socket/bitmex-socket.module';
import { BitmexSocketService } from './bitmex-socket/bitmex-socket.service';

@Module({
  imports: [BitmexSocketModule, BitmexSocketService],
  controllers: [AppController],
  providers: [AppService],
  exports:[AppService]
})
export class AppModule {}
