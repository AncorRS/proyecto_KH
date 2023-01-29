import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from "../../../services/service.service";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-vacaciones-empleado',
  templateUrl: './vacaciones-empleado.component.html',
  styleUrls: ['./vacaciones-empleado.component.css']
})
export class VacacionesEmpleadoComponent implements OnInit {

  id: any;
  datosEmpleado: any;
  datosPostEnvio: any;
  formu: FormGroup;
  estado: string = "S";
  nombreEmpleado: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ServiceService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('ida'));
      this.id = params.get('ida')
      // hacer algo con el objeto
    });

    this.service.empleado(this.id).subscribe(data =>{
      this.datosEmpleado = data;
      this.nombreEmpleado = this.datosEmpleado.nombre_empleado;
      console.log(this.datosEmpleado)
    });
  }
}
