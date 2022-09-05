import { BasicURL } from "./basic_url.model";
import { Name } from "./name.model";


export class Region{
  id: number;
  name: string;
  names: Name[];
  pokedexes: BasicURL[];
  /*abilities: Ability[;]
  moves: Move[];
  pokemon_species: PokemonSpecies[];
  types: Type[];
  version_groups: VersionGroup[];*/
}
