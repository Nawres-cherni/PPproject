import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { DashboardDefaultComponent } from "./pages/dashboard/dashboard-default/dashboard-default.component";
import { SimplePageComponent } from "./pages/simple-page/simple-page.component";
import { ProfileComponent } from "./pages/user/profile/profile.component";
import { AccueilComponent } from "./teams/club/accueil/accueil.component";
import { AdminDashboardComponent } from "./teams/club/admin-dashboard/admin-dashboard.component";
import { BodyComponent } from "./teams/club/body/body.component";
import { ClubsComponent } from "./teams/club/clubs/clubs.component";
import { DashboardComponent } from "./teams/club/dashboard/dashboard.component";
import { DemandeComponent } from "./teams/club/demande/demande.component";
import { ListeDemndeComponent } from "./teams/club/liste-demnde/liste-demnde.component";
import { ListeMembreComponent } from "./teams/club/liste-membre/liste-membre.component";
import { SigninComponent } from "./teams/club/signin/signin.component";

const routes: Routes = [

 
  { path: "signin", component: SigninComponent },



  {
    path: "adminclub",
    component: AdminDashboardComponent,
    children: [
      {
        path: "body",
        component: BodyComponent,
      },
    ],
  },

  {
    path: "adminclub",
    component: AdminDashboardComponent,
    children: [
      {
        path: "body",
        component: BodyComponent,
      },
      { path: "accueil", component: AccueilComponent,},
      { path: "clubs", component: ClubsComponent },
      { path: "clubdashboard", component: DashboardComponent },
      { path: "listeDemande", component: ListeDemndeComponent },
      { path: "listeMembre", component: ListeMembreComponent },

 
      { path: "demande", component: DemandeComponent },
     

      

    ],
  },

  






  {
    path: "",
    component: HomePageComponent,
    children: [
      {
        path: "",
        component: DashboardDefaultComponent,
      },
    ],
  },
  {
    path: "dashboard",
    component: HomePageComponent,
    children: [
      {
        path: "",
        component: DashboardDefaultComponent,
      },
      {
        path: "profil",
        component: ProfileComponent,
      },
      { path: "simple", component: SimplePageComponent },


     


      // {
      //   path: "stage", component : ,
      //   children: [
      //     {

      //     }
      //   ]
      // },
      // {
      //   path: "club", component: ,
      //   children: [
      //     {

      //     }
      //   ]
      // },
      // {
      //   path: "communication", component: ,
      //   children: [
      //     {

      //     }
      //   ]
      // },
      // {
      //   path: "scolarite", component: ,
      //   children: [
      //     {

      //     }
      //   ]
      // },
      // {
      //   path: "selection", component: ,
      //   children: [
      //     {

      //     }
      //   ]
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
