import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


// Document agrega las funcionalidades de mongoose a la clase Pokemon, ademas incluye el plural en la colección 
@Schema()
export class Pokemon extends Document {
  // id: number;
  @Prop({ unique: true, index: true })
  name: string;
  //Indice sirve para que la busqueda sea mas rapida, al saber que el campo contiene valores unicos
  @Prop({ unique: true, index: true })
  no: number;
}

// Exportamos el esquema de mongoose para que pueda ser utilizado en otros archivos
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);