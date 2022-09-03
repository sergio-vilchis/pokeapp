import { Description } from "./description.model";
import { Name } from "./name.model";


export class Pokedex{
  constructor(id:number, descriptions: Description[], is_main_series: boolean, names: Name[]) {
    this.id = id;
    this.descriptions = descriptions;
    this.is_main_series = is_main_series;
    this.names= names;
  }
  id: number;
  is_main_series: boolean;
  descriptions: Description[];
  names: Name[];
}
