
import { IsOptional } from 'class-validator';

export class FindBitMexApiPaginationDto {

  @IsOptional()
  skip?: number;

  @IsOptional()
  take?: number;

}
