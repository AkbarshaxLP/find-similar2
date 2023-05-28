import { IsEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsEmpty()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsNumber()
  readonly categoryId: number;
}
