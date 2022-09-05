import { BasicURL } from "./basic_url.model";
import { Name } from "./name.model";


export class Generation{
  id: number;
  name: string;
  names: Name[];
  main_region: BasicURL;
  /*abilities: Ability[;]
  moves: Move[];
  pokemon_species: PokemonSpecies[];
  types: Type[];
  version_groups: VersionGroup[];*/
}
