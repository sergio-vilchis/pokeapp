import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationListComponent } from './components/generation/generation-list.component';
import { GetTranslatedName } from './pipes/translated_name.pipe';
import { ServiceUtils } from './services/generation/services-utils.model';

@NgModule({
  declarations: [
    AppComponent,
    GenerationListComponent,
    GetTranslatedName
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServiceUtils],
  bootstrap: [AppComponent]
})
export class AppModule { }
