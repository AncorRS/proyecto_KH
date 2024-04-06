import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from "./components/registro/registro.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminComponent } from "./components/admin/admin.component";
import { EmpleadoComponent } from "./components/empleado/empleado.component";
import { FichaEmpleadoComponent } from "./components/ficha-empleado/ficha-empleado.component";
import { ListaEmpleadosComponent } from "./components/lista-empleados/lista-empleados.component";
import { ListaVacacionesComponent } from "./components/lista-vacaciones/lista-vacaciones.component";
import { IndexComponent } from './components/index/index.component';
import { UpdateEmpleadoComponent } from "./components/empleado/update-empleado/update-empleado.component";
import { VacacionesEmpleadoComponent } from "./components/empleado/vacaciones-empleado/vacaciones-empleado.component";
import { SolicitudVacacionesComponent } from "./components/empleado/solicitud-vacaciones/solicitud-vacaciones.component";
import { ListadoSolicitudesComponent } from "./components/admin/listado-solicitudes/listado-solicitudes.component";

const routes: Routes = [
  {path:'registro', component: RegistroComponent},
  {path:'login', component: LoginComponent},
  {path:'admin', component: AdminComponent},
  {path:'admin/listado-solicitudes', component: ListadoSolicitudesComponent},
  {path:'empleado', component: EmpleadoComponent},
  {path:'empleado/update-empleado/:ida', component: UpdateEmpleadoComponent},
  {path:'empleado/vacaciones-empleado/:ida', component: VacacionesEmpleadoComponent},
  {path:'empleado/solicitud-vacaciones/:ida', component: SolicitudVacacionesComponent},
  {path:'ficha-empleado/:ida', component: FichaEmpleadoComponent}, //POR LA URL VIENE EL ID
  {path:'lista-empleados', component: ListaEmpleadosComponent},
  {path:'lista-vacaciones', component: ListaVacacionesComponent},
  {path:'index', component: IndexComponent},
  {path:'', pathMatch:'full', redirectTo:'login'},
  {path:'**', pathMatch:'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
