import { BasicURL } from "./basic_url.model";
import { Name } from "./name.model";


export class Region{
  constructor(id:number,name:string, names:Name[], pokedexes: BasicURL[]) {
    this.id=id;
    this.name=name;
    this.names=names;
    this.pokedexes=pokedexes;
  }

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
