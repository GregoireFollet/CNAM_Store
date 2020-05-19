import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {RouterModule, Routes} from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import {AuthService} from './services/auth.service';
import { InscriptionComponent } from './inscription/inscription.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: '', component: AccueilComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AccueilComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
