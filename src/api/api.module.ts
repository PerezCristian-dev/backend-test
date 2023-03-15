import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Announcement from 'src/bitmex-api/entities/announcement.entity';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports:[TypeOrmModule.forFeature([Announcement])]
  
})
export class ApiModule {}
