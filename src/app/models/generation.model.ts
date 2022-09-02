import { Name } from "./name.model";

export class Generation{
  constructor(id:number,name:String, names:Name[]) {
    this.id=id;
    this.name=name;
    this.names=names;
  }

  id: number;
  name: String;
  names: Name[];
  /*abilities: Ability[;]
  main_region: Region;
  moves: Move[];
  pokemon_species: PokemonSpecies[];
  types: Type[];
  version_groups: VersionGroup[];*/
}
