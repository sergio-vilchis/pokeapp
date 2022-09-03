import { BasicURL } from "./basic_url.model";
import { Name } from "./name.model";


export class Generation{
  constructor(id:number,name:string, names:Name[], main_region: BasicURL) {
    this.id=id;
    this.name=name;
    this.names=names;
    this.main_region=main_region;
  }

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
