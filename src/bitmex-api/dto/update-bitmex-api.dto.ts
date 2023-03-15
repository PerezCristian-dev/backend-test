import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';

import { CreateBitmexApiDto } from './create-bitmex-api.dto';

export class UpdateBitmexApiDto extends PartialType(CreateBitmexApiDto) {
    @IsOptional()
    id: number;
  
    @IsOptional()
    link: string;
  
    @IsOptional()
    title: string;
  
    @IsOptional()
    content: string;
  
    @IsOptional()
    date: string;
}
