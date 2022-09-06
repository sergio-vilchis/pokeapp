import { Component } from '@angular/core';
import { Pokedex } from './models/pokedex.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  windowScrolled = false;
  title = 'Pokéapp';
  pokedex: Pokedex;

  pokedexFetch(pokedex: Pokedex){
    this.pokedex = pokedex;
  }

  ngOnInit(){
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
