import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Generation } from '../models/generation.model';
import { AppComponent } from './../app.component';
import { AppModule } from './../app.module';
import { GenerationListComponent } from './generation/generation-list.component';

describe('AppComponent', () => {
  let generationComponent: GenerationListComponent;
  let fixture: ComponentFixture<GenerationListComponent>;
  let generations: Generation[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, AppModule
      ],
      declarations: [
        AppComponent, GenerationListComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(GenerationListComponent);
    generationComponent = fixture.debugElement.componentInstance;
  });

  it('should have pokemon generations listed',(done: DoneFn)=> {
    generationComponent.getGenerations();
    generations = generationComponent.generations;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(generations.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should have pokemon generations details',(done: DoneFn)=> {
    generationComponent.getGenerations();
    generations = generationComponent.generations;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(generations[0].name).toContain("generation")
      done();
    });
  });
});
