import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BitmexApiService } from './bitmex-api.service';

import { CreateBitmexApiDto } from './dto/create-bitmex-api.dto';
import { UpdateBitmexApiDto } from './dto/update-bitmex-api.dto';

@Controller('bitmex')
export class BitmexApiController {
  constructor(private readonly bitmexApiService: BitmexApiService) {}

  @Post()
  create(@Body() createBitmexApiDto: CreateBitmexApiDto) {
    return this.bitmexApiService.create(createBitmexApiDto);
  }

  @Get()
  findAll() {
    return this.bitmexApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bitmexApiService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBitmexApiDto: UpdateBitmexApiDto,
  ) {
    
    
    return this.bitmexApiService.update(+id, updateBitmexApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bitmexApiService.remove(+id);
  }
}
