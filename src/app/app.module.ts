import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './login/authentication/authentication.component';
import { SalesManMenuComponent } from './sales-man-menu/sales-man-menu.component';
import { OperatorMenuComponent } from './operator-menu/operator-menu.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { TraineeMenuComponent } from './trainee-menu/trainee-menu.component';
import { SimulationHomeComponent } from './simulation-home/simulation-home.component';
import { ContratedComponent } from './simulation-home/contrated/contrated.component';
import { IndependentComponent } from './simulation-home/independent/independent.component';
import { SimulationCarComponent } from './simulation-car/simulation-car.component';
import { ContractedComponent } from './simulation-car/contracted/contracted.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthenticationComponent,
    SalesManMenuComponent,
    OperatorMenuComponent,
    AdminMenuComponent,
    TraineeMenuComponent,
    SimulationHomeComponent,
    ContratedComponent,
    IndependentComponent,
    SimulationCarComponent,
    ContractedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
