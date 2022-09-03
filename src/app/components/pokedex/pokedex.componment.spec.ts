import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { AppModule } from 'src/app/app.module';
import { PokedexComponent } from './pokedex.component';

describe('PokedexComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, AppModule
      ],
      declarations: [
        AppComponent,PokedexComponent
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PokedexComponent);
    const pokedex = fixture.componentInstance;
    expect(pokedex).toBeTruthy();
  });
});
