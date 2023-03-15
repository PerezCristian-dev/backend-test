import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { IDateRangeQuery } from 'src/interfaces/bitmex.interface';

export class FindBitMexApiQueryDto {

  @IsOptional()
  search?: string;

  @Type(() => IDateRangeQuery)
  dateRange: IDateRangeQuery;

}
