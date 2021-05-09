import { componentFactoryName } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonProfileComponent } from './components/pokemon-profile/pokemon-profile.component';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { LandingPage } from './pages/landingpage/landing.page';
import { LoginPage } from './pages/login/login.page';
import { NotFoundPage } from './pages/notfound/notfound.page';
import { TrainerPage } from './pages/trainer/trainer.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  },
  {
    path: 'login',
    component: LoginPage
  },

  {
    path: 'trainer',
    component: TrainerPage
  },
  {
    path: "",
    component: LandingPage,

  },

  {
    path: 'catalogue',
    component: CataloguePage
  },
  {
    path: 'catalogue/:name',
    component: PokemonDetailsComponent
  },
  {
    path: '**',
    component: NotFoundPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
