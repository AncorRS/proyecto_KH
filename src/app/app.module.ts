import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { FichaEmpleadoComponent } from './components/ficha-empleado/ficha-empleado.component';
import { RegistroComponent } from './components/registro/registro.component';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { ModalRegistroComponent } from './modales/modal-registro/modal-registro.component'; //AÑADIMOS HTTPCLIENTMODULE
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import { ListaVacacionesComponent } from './components/lista-vacaciones/lista-vacaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    EmpleadoComponent,
    FichaEmpleadoComponent,
    RegistroComponent,
    ListaEmpleadosComponent,
    MenuComponent,
    ModalLoginComponent,
    ModalRegistroComponent,
    ListaVacacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, //AÑADIMOS HTTPCLIENTMODULE
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    InputTextModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
