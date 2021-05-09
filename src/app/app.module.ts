import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { HeaderComponent } from './components/header/header.component';

import { LoginPage } from './pages/login/login.page';
import { NotFoundPage } from './pages/notfound/notfound.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonProfileComponent } from './components/pokemon-profile/pokemon-profile.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { LandingPage } from './pages/landingpage/landing.page';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    CatalogueComponent,
    PokemonCardComponent,
    PokemonProfileComponent,
    PokemonDetailsComponent,


    NotFoundPage,
    LoginPage,
    TrainerPage,
    LandingPage,
    CataloguePage,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
