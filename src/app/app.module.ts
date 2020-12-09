import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuCardsComponent } from './components/menu-cards/menu-cards.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrarServicioComponent } from './components/registrar-servicio/registrar-servicio.component';
import { CalculoNominaComponent } from './components/calculo-nomina/calculo-nomina.component';
import { NominaComponent } from './components/nomina/nomina.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuCardsComponent,
    RegistrarServicioComponent,
    CalculoNominaComponent,
    NominaComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
