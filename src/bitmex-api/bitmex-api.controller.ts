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
import { Query } from '@nestjs/common';
import { FindBitMexApiQueryDto } from './dto/find-bitmex-api-query.dto';
import { FindBitMexApiPaginationDto } from './dto/find-bitmex-api-pagination.dto';

@Controller('bitmex')
export class BitmexApiController {
  constructor(private readonly bitmexApiService: BitmexApiService) {}

  @Post()
  create(@Body() createBitmexApiDto: CreateBitmexApiDto) {
    return this.bitmexApiService.create(createBitmexApiDto);
  }

  @Get()
  findAll(@Query("filter") filter: string, @Query("pagination") pagination: string ) {
    
    const formattedFilter = JSON.parse(filter || "{}") as FindBitMexApiQueryDto;
    const formattedPagination = JSON.parse(pagination || "{}") as FindBitMexApiPaginationDto;
    
    return this.bitmexApiService.findAll(formattedFilter, formattedPagination);
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
