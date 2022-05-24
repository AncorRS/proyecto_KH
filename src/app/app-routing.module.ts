import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from "./components/registro/registro.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminComponent } from "./components/admin/admin.component";
import { EmpleadoComponent } from "./components/empleado/empleado.component";
import { FichaEmpleadoComponent } from "./components/ficha-empleado/ficha-empleado.component";
import { ListaEmpleadosComponent } from "./components/lista-empleados/lista-empleados.component";
import { ListaVacacionesComponent } from "./components/lista-vacaciones/lista-vacaciones.component";

const routes: Routes = [
  {path:'registro', component: RegistroComponent},
  {path:'login', component: LoginComponent},
  {path:'admin', component: AdminComponent},
  {path:'empleado', component: EmpleadoComponent},
  {path:'ficha-empleado/:ida', component: FichaEmpleadoComponent}, //POR LA URL VIENE EL ID
  {path:'lista-empleados', component: ListaEmpleadosComponent},
  {path:'lista-vacaciones', component: ListaVacacionesComponent},
  {path:'', pathMatch:'full', redirectTo:'registro'},
  {path:'**', pathMatch:'full', redirectTo:'registro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
