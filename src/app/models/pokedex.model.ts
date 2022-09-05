import { Description } from "./description.model";
import { Name } from "./name.model";import { PokemonEntry } from "./pokemon_entry.model";

export class Pokedex{
  id: number;
  is_main_series: boolean;
  descriptions: Description[];
  names: Name[];
  pokemon_entries: PokemonEntry[];
}
