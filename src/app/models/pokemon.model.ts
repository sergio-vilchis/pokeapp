import { PokemonSprites } from "./pokemon_sprites.model";
import { Type } from "./type.model";

export class Pokemon{
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: Type[];
}
