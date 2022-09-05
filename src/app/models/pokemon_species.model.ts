import { FlavorTextEntry } from "./flavor_text_entry.model";
import { PokemonSpeciesVariety } from "./pokemon_species_variety.model";


export class PokemonSpecies{
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  varieties: PokemonSpeciesVariety[];
  flavor_text_entries: FlavorTextEntry[];
}
