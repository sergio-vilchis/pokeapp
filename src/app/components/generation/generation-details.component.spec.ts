import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Generation } from '../../models/generation.model';
import { AppComponent } from '../../app.component';
import { AppModule } from '../../app.module';
import { GenerationDetailsComponent } from './generation-details.component';
import { Region } from 'src/app/models/region.model';
import { Name } from 'src/app/models/name.model';
import { BasicURL } from 'src/app/models/basic_url.model';

describe('GenerationDetailsComponent', () => {
  let generationComponent: GenerationDetailsComponent;
  let fixture: ComponentFixture<GenerationDetailsComponent>;
  let region: Region;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, AppModule
      ],
      declarations: [
        AppComponent, GenerationDetailsComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(GenerationDetailsComponent);
    generationComponent = fixture.debugElement.componentInstance;
    let basicUrlName: BasicURL = new BasicURL("https://pokeapi.co/api/v2/language/7/","kanto");
    let basicUrlRegion: BasicURL = new BasicURL("https://pokeapi.co/api/v2/region/1/","kanto");
    let name: Name = new Name(basicUrlName,"es");
    let generation = new Generation(1,"kanto",[name],basicUrlRegion);
    generationComponent.generation = generation;
    generationComponent.getRegion();
    fixture.detectChanges();
    generationComponent.getPokedex(generation.main_region.url);
  });

  it('should get region',(done: DoneFn)=> {
    generationComponent.getRegion();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      region = generationComponent.region;
      expect(region.names.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should get pokedex',(done: DoneFn)=> {
    generationComponent.getPokedex(region.pokedexes[0].url)
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(region.names.length).toBeGreaterThan(0);
      done();
    });
  });
});
