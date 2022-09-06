import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { Pokedex } from './models/pokedex.model';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, AppModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pokeapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Pokéapp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Generaciones');
  });

  it('should emit with Pokedex', (done: DoneFn)=> {
    const fixture = TestBed.createComponent(AppComponent);
    let appComponent: AppComponent = fixture.debugElement.componentInstance;
    let pokedex: Pokedex = new Pokedex();
    appComponent.pokedexFetch(pokedex);
    expect(pokedex).toEqual(appComponent.pokedex);
    done();
  });

  it('should scroll', (done: DoneFn)=> {
    const fixture = TestBed.createComponent(AppComponent);
    let appComponent: AppComponent = fixture.debugElement.componentInstance;
    appComponent.scrollToTop();
    expect(appComponent.windowScrolled).toBeFalse;
    done();
  });

  it('should scroll', (done: DoneFn)=> {
    const fixture = TestBed.createComponent(AppComponent);
    let appComponent: AppComponent = fixture.debugElement.componentInstance;
    const container = fixture.debugElement.query(By.css('.main-container'));

    container.nativeElement.scroll();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(appComponent.windowScrolled).toBeTrue
      done();
    });
  });
});
