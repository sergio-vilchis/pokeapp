import { BasicURL } from "./basic_url.model";
import { Description } from "./description.model";
import { FlavorTextEntry } from "./flavor_text_entry.model";
import { Generation } from "./generation.model";
import { Language } from "./language.model";
import { Name } from "./name.model";
import { Pokedex } from "./pokedex.model";
import { Pokemon } from "./pokemon.model";
import { PokemonEntry } from "./pokemon_entry.model";
import { PokemonSpecies } from "./pokemon_species.model";
import { PokemonSpeciesVariety } from "./pokemon_species_variety.model";
import { PokemonSprites } from "./pokemon_sprites.model";
import { Region } from "./region.model";

describe('Models testing', () => {

  it('Create Models', () => {
    let basicUrl = new BasicURL();
    expect(basicUrl).toBeDefined();

    let desciption = new Description();
    expect(desciption).toBeDefined();

    let flavor_text_entry = new FlavorTextEntry();
    expect(flavor_text_entry).toBeDefined();

    let generation = new Generation();
    expect(generation).toBeDefined();

    let language = new Language();
    expect(language).toBeDefined();

    let name = new Name();
    expect(name).toBeDefined();

    let pokedex = new Pokedex();
    expect(pokedex).toBeDefined();

    let pokemon_entry = new PokemonEntry();
    expect(pokemon_entry).toBeDefined();

    let pokemon_species_variety = new PokemonSpeciesVariety();
    expect(pokemon_species_variety).toBeDefined();

    let pokemon_species = new PokemonSpecies();
    expect(pokemon_species).toBeDefined();

    let pokemon_sprites = new PokemonSprites();
    expect(pokemon_sprites).toBeDefined();

    let pokemon = new Pokemon();
    expect(pokemon).toBeDefined();

    let region = new Region();
    expect(region).toBeDefined();

  });
});
