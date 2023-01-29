import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from "../../../services/service.service";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-solicitud-vacaciones',
  templateUrl: './solicitud-vacaciones.component.html',
  styleUrls: ['./solicitud-vacaciones.component.css']
})
export class SolicitudVacacionesComponent implements OnInit {

  id: any;
  datosEmpleado: any;
  datosPostEnvio: any;
  formu: FormGroup;
  estado: string = "S";
  habilitar: string = "disabled";
  mostrarMensaje: boolean = false;
  mensajeErrorCalculoDias: string = "La fecha de inicio debe ser inferior a la fecha de fin";
  restaDeDias: number;
  vacas = {
      //id: 1,
      fecha_ini: null,
      fecha_fin: null,
      numero_dias: 0,
      motivo_cambio: 0,
      estado_Adm: "",
      estado_Resp: "",
      estado: "S"
      //user: 1   
    }

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ServiceService
  ) {
    this.formu = new FormGroup({
      fecha_ini: new FormControl(),
      fecha_fin: new FormControl()
  });
   }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('ida'));
      this.id = params.get('ida')
      // hacer algo con el objeto
    });

    this.service.empleado(this.id).subscribe(data =>{
      this.datosEmpleado = data;
      console.log(this.datosEmpleado)
    });
  }

  enviaVacaciones(){
    this.vacas.fecha_ini = this.formu.value.fecha_ini;
    this.vacas.fecha_fin = this.formu.value.fecha_fin;
    console.log("enviaVacaciones");
    console.log(this.formu.value.fecha_ini);
    console.log(this.formu.value.fecha_fin);
    this.service.vacaciones(this.vacas).subscribe(data =>{
      console.log(data);
    })
  }

  calcularDias(){
    if(Date.parse(this.formu.value.fecha_ini) <= Date.parse(this.formu.value.fecha_fin)){
      console.log(Date.parse(this.formu.value.fecha_ini) <= Date.parse(this.formu.value.fecha_fin));
      console.log("calcularDIas");
      this.calcularRestaDeDias();
      this.vacas.numero_dias = this.restaDeDias;
      this.habilitar = "";
      this.mostrarMensaje = false;
    }else if( Date.parse(this.formu.value.fecha_ini) > Date.parse(this.formu.value.fecha_fin)){
      console.log(Date.parse(this.formu.value.fecha_ini) <= Date.parse(this.formu.value.fecha_fin));
      console.log("calcularDIas");
      this.habilitar = "disabled";
      this.mostrarMensaje = true;
    }
  }

  calcularRestaDeDias(){
    this.restaDeDias = ((Date.parse(this.formu.value.fecha_fin) - Date.parse(this.formu.value.fecha_ini)) / (1000 * 60 * 60 * 24)+1);
    console.log(this.restaDeDias);
  }
}
