import { IsNotEmpty, IsOptional } from 'class-validator';


export class CreateBitmexApiDto {
  @IsNotEmpty()
  id: number;

  @IsOptional()
  link: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsOptional()
  date: string;
}
