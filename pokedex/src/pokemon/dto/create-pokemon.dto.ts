import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @MinLength(3)
  @IsString()
  name: string;
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;
}
