import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculoNominaComponent } from './components/calculo-nomina/calculo-nomina.component';
import { MenuCardsComponent } from './components/menu-cards/menu-cards.component';
import { NominaComponent } from './components/nomina/nomina.component';
import { RegistrarServicioComponent } from './components/registrar-servicio/registrar-servicio.component';


const routes: Routes = [
   { path: '', component: MenuCardsComponent },
   { path: 'registrar', component: RegistrarServicioComponent},
   { path: 'calcular', component: CalculoNominaComponent},
   { path: 'nomina', component: NominaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }