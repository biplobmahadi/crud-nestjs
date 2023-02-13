import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsInt()
  age: number;

  @IsString()
  phone: string;
}
