import { async, ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Generation } from '../../models/generation.model';
import { AppComponent } from '../../app.component';
import { AppModule } from '../../app.module';
import { Name } from 'src/app/models/name.model';
import { BasicURL } from 'src/app/models/basic_url.model';
import { PokemonCardComponent } from './pokemon_card.component';
import { PokemonEntry } from 'src/app/models/pokemon_entry.model';
import { PokemonSpecies } from 'src/app/models/pokemon_species.model';
import { Pokemon } from 'src/app/models/pokemon.model';

describe('PokemonCardComponent', () => {
  let pokemonCardComponent: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  let pokemon_species: PokemonSpecies;
  let pokemon; Pokemon;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, AppModule
      ],
      declarations: [
        AppComponent, PokemonCardComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(PokemonCardComponent);
    pokemonCardComponent = fixture.debugElement.componentInstance;
    let basicUrlSpecies: BasicURL = new BasicURL();
    basicUrlSpecies.url="https://pokeapi.co/api/v2/pokemon-species/1/";
    basicUrlSpecies.name="bulbasaur";
    let pokemon_entry:PokemonEntry = new PokemonEntry();
    pokemon_entry.entry_number=1;
    pokemon_entry.pokemon_species=basicUrlSpecies;
    pokemonCardComponent.pokemon_entry = pokemon_entry;
  });

  it('should get pokemon_species',(done: DoneFn)=> {
    pokemonCardComponent.getPokemonSpecies()
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      pokemon_species=pokemonCardComponent.pokemon_species
      expect(pokemon_species).toBeDefined()
      done();
    });
  });

  it('should get pokemon',(done: DoneFn)=> {
    pokemonCardComponent.getPokemon(pokemon_species.varieties[0].pokemon.url)
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      pokemon=pokemonCardComponent.pokemon
      expect(pokemon).toBeDefined()
      done();
    });
  });
});
