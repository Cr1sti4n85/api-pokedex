import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';

//permite heredar de createPokemon. Las propiedades son opcionales
export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
