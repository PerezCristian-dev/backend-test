import { Module } from '@nestjs/common';
import { BitmexApiService } from './bitmex-api.service';
import { BitmexApiController } from './bitmex-api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Announcement} from './entities/announcement.entity';


@Module({
  controllers: [BitmexApiController],
  imports: [TypeOrmModule.forFeature([Announcement])],
  exports: [BitmexApiService, TypeOrmModule],
  providers: [BitmexApiService],
})
export class BitmexApiModule {}
