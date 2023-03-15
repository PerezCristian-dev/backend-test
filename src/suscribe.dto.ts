import { IsOptional } from 'class-validator';

export class SubscribeDto {
  @IsOptional()
  subscribe: string;
  
  @IsOptional()
  array: Array<string>;
}
