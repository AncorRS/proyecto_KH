import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private servicio: ServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);
    console.log(this.role);

    /* this.servicio.enviaRegistro(); */
  

    this.servicio.enviaRegistro(this.username, this.email, this.password).subscribe(data =>{
      console.log(data);
      this.data = data;
      this.mensajeKawai = this.data.message;
    }, (errorServicio) =>{
     /*  this.loading=false;
      this.error=true; */
      console.log(errorServicio);
      console.log(errorServicio.error.message); //VIENE DEL JSON
      this.mensajeBaka = errorServicio.error.message;
    }
    )
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
}



interface Cliente {
  message: String;
}
