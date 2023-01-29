import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ServiceService } from "../../services/service.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  username: String;
  email: String;
  password: String;
  role: String;
  mensajeKawai: String;
  mensajeBaka: any;
  data: any;
  registro = {
    nombre: "www11",
    dni: "www11",
    clave: "www11",
    fecha_ini: "1999-09-09",
    fecha_fin: "1999-09-09",
    tipo_contrato: "aa",
    tipo_jornada: "bb",
    puesto: "d",
    categoria: "e",
    grupo: 0,
    canal: "f",
    empresa: "g",
    grupo_vacaciones: 0,
    salario: 15000,
    complementos: "h",
    observaciones: "i"
  };
  formu: FormGroup;

/*   nombre: string= "";
  dni: string= "";
  clave: string= "HOLAAA";
  fecha_ini: any = null;
  fecha_fin: any = null;
  tipo_contrato: string= "";
  tipo_jornada: string= "";
  puesto: string= "";
  categoria: string= "";
  grupo: string= "";
  canal: string= "";
  empresa: string = "";
  grupo_vacaciones: number = 0;
  salario: number = 0;
  complementos: string = "";
  observaciones: string = ""; */

  constructor(
    private servicio: ServiceService,
    private router: Router
    ) { 
      this.formu = new FormGroup({
        nombre: new FormControl(),
        dni: new FormControl(),
        clave: new FormControl(),
        fecha_ini: new FormControl(),
        fecha_fin: new FormControl(),
        tipo_contrato: new FormControl(),
        tipo_jornada: new FormControl(),
        puesto: new FormControl(),
        categoria: new FormControl(),
        grupo: new FormControl(),
        canal: new FormControl(),
        empresa: new FormControl(),
        grupo_vacaciones: new FormControl(),
        salario: new FormControl(),
        complementos: new FormControl(),
        observaciones: new FormControl()
    });
    }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log("onSubmit");
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);
    console.log(this.role);

    /* this.servicio.enviaRegistro(); */
  
    ///////// EL SERVICIO ANTERIOR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*     this.servicio.enviaRegistro(this.username, this.email, this.password).subscribe(data =>{
      console.log(data);
      this.data = data;
      this.mensajeKawai = this.data.message;
    }, (errorServicio) =>{
      //this.loading=false;
      //this.error=true;
      console.log(errorServicio);
      console.log(errorServicio.error.message); //VIENE DEL JSON
      this.mensajeBaka = errorServicio.error.message;
    }
    ) */

    this.registroFake();
  }

  onSubmit1(){
    this.servicio.enviaRegistro(this.username, this.email, this.password).toPromise().then((data: any) =>{
      console.log(data);
      this.data = data;
      this.mensajeKawai = this.data["message"];
    }, (errorServicio) =>{
     /*  this.loading=false;
      this.error=true; */
      console.log(errorServicio);
      console.log(errorServicio.error.message); //VIENE DEL JSON
      this.mensajeBaka = errorServicio.error.message;
    }
    )
  }

  login(){
    this.router.navigate(['login']);
  }

  vacaciones(){
   /*  this.servicio.vacaciones().subscribe(data =>{
      console.log(data);
    }) */
  }

  registroFake(){
    console.log("registroFake");
    this.servicio.registroFake(this.registro).subscribe(data =>{})
  }
}


interface Cliente {
  message: String;
}
