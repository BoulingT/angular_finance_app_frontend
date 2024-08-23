import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule, routes} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {provideRouter} from "@angular/router";
import {AuthModule} from "./core/authentication/auth.module";
import {MonthlyExpensesRecapComponent} from "./core/expense/monthly-expenses-recap/monthly-expenses-recap.component";
import {InvestmentRecapComponent} from "./core/investment/investment-recap/investment-recap.component";
import {ManageRessourcesComponent} from "./pages/manage-ressources/manage-ressources.component";
import {InfoCardComponent} from "./core/info-amount-card/info-card.component";
import {RepartitionDiagramComponent} from "./core/graphs/repartition-diagram/repartition-diagram.component";
import {RessourcesDisplayComponent} from "./core/ressources-display/ressources-display.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptorService} from "./core/authentication/token-interceptor.service";
import { NavbarComponent } from './core/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MonthlyExpensesRecapComponent,
    InvestmentRecapComponent,
    ManageRessourcesComponent,
    InfoCardComponent,
    RepartitionDiagramComponent,
    RessourcesDisplayComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
  ],
  providers: [
    provideRouter((routes)),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
