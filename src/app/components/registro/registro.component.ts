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
    //idempleado: null,
    nombre: "www33",
    dni: "www33",
    clave: "www33",
    fechaini: "1999-09-09",
    fechafin: "1999-09-08",
    tipocontrato: "a",
    tipojornada: "b",
    puesto: "d",
    categoria: "e",
    grupo: 0,
    canal: "f",
    empresa: "g",
    grupovacaciones: 0,
    salario: 15000,
    complementos: "h",
    observaciones: "i",
    //role: ['user','admin']
    role: ['user','admin']
  };

  registroClasePrueba = {
    nombre_elemento: "www21",
    id: null
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
    private router: Router,
    private formBuilder: FormBuilder
    ) { 
      /* this.form = this.fb.group({
        FirstName: ['', Validators.required],
      }); */

      this.formu = this.formBuilder.group({
        nombre: ['', Validators.required],
        dni: ['', Validators.required],
        clave: ['', Validators.required],
        fechaini: ['2000-01-01', Validators.required],
        fechafin: ['', Validators.required],
        tipocontrato: ['', Validators.required],
        tipojornada: ['', Validators.required],
        puesto: ['', Validators.required],
        categoria: ['', Validators.required],
        grupo: ['', Validators.required],
        canal: ['', Validators.required],
        empresa: ['', Validators.required],
        grupovacaciones: ['', Validators.required],
        salario: ['', Validators.required],
        complementos: ['', Validators.required],
        observaciones: ['', Validators.required]
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
    this.servicio.registroFake(this.formu.value).subscribe(data =>{
      console.log(data);
    })
  }

  onSubmitClasePrueba(){
    console.log("onSubmitClasePrueba");
    this.servicio.clasePrueba(this.registroClasePrueba).subscribe(data =>{
      console.log(data);
    })
  }
}

interface Cliente {
  message: String;
}
