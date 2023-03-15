import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BitmexSocketModule } from './bitmex-socket/bitmex-socket.module';
import { BitmexSocketService } from './bitmex-socket/bitmex-socket.service';
import { BitmexApiModule } from './bitmex-api/bitmex-api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import Announcement from './bitmex-api/entities/announcement.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BitmexSocketModule,
    BitmexSocketService,
    BitmexApiModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,

      synchronize: true,
      autoLoadEntities: true,
    }),
    BitmexApiModule,
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
