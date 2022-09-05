import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationListComponent } from './components/generation/generation-list.component';
import { GetTranslatedName } from './pipes/translated_name.pipe';
import { ServiceUtils } from './services/services-utils.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { GenerationDetailsComponent } from './components/generation/generation-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { GetTranslatedDescription } from './pipes/translated_description.pipe';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { PokemonCardComponent } from './components/pokemon_card/pokemon_card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GetTranslatedFlavorText } from './pipes/translated_flavor_text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GenerationListComponent,
    GenerationDetailsComponent,
    PokedexComponent,
    PokemonCardComponent,
    GetTranslatedName,
    GetTranslatedDescription,
    GetTranslatedFlavorText
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [ServiceUtils],
  bootstrap: [AppComponent]
})
export class AppModule { }
