import { Controller, Get } from '@nestjs/common';
import { BitmexApiService } from 'src/bitmex-api/bitmex-api.service';
import { ApiService } from './api.service';

@Controller('api')

export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  findAll() {
    return this.apiService.updateDB();
  }
}
