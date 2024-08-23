import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {ManageRessourcesComponent} from "./pages/manage-ressources/manage-ressources.component";
import {AuthenticationComponent} from "./core/authentication/authentication-page/authentication.component";

export const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'manage-resources', component: ManageRessourcesComponent},
  {path: 'authentication', component: AuthenticationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
