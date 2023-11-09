import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
  @IsString({ message: 'The id must be a string' })
  @IsUUID('4', { message: 'The id must be a valid UUID v4' })
  @IsOptional()
  readonly id: string;

  @IsString({ message: 'The brand must be a string' })
  @IsOptional()
  readonly brand: string;

  @IsString({ message: 'The model must be a string' })
  @IsOptional()
  @MinLength(3, { message: 'The model must be at least 3 characters long' })
  readonly model: string;
}
