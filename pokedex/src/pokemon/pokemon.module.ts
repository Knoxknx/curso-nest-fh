import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  //forFeature es para indicar que el modelo PokemonSchema es parte de este modulo
  imports: [MongooseModule.forFeature([{ name: Pokemon.name, schema: PokemonSchema }])],
})

export class PokemonModule { }
