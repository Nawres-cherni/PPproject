import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { SharedModule} from './shared/shared.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardDefaultComponent } from './pages/dashboard/dashboard-default/dashboard-default.component';
import { SimplePageComponent } from './pages/simple-page/simple-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { PopupComponent } from './popup/popup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './teams/club/dashboard/dashboard.component';
import { ListeDemndeComponent } from './teams/club/liste-demnde/liste-demnde.component';
import { ListeMembreComponent } from './teams/club/liste-membre/liste-membre.component';
import { AccueilComponent } from './teams/club/accueil/accueil.component';
import { AccueilMembreComponent } from './teams/club/accueil-membre/accueil-membre.component';
import { ClubsComponent } from './teams/club/clubs/clubs.component';
import { AdminDashboardComponent } from './teams/club/admin-dashboard/admin-dashboard.component';
import { BodyComponent } from './teams/club/body/body.component';
import { DemandeComponent } from './teams/club/demande/demande.component';
import { SigninComponent } from './teams/club/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardDefaultComponent,
    SimplePageComponent,
    HomePageComponent,
    ProfileComponent,
    PopupComponent,
    DashboardComponent,
    ListeDemndeComponent,
    ListeMembreComponent,
    AccueilComponent,
    AccueilMembreComponent,
    ClubsComponent,
    AdminDashboardComponent,
    BodyComponent,
    DemandeComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [PopupComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
