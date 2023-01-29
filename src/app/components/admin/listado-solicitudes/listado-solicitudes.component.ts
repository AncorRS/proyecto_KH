import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../../../services/service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-solicitudes',
  templateUrl: './listado-solicitudes.component.html',
  styleUrls: ['./listado-solicitudes.component.css']
})
export class ListadoSolicitudesComponent implements OnInit {
  listaVacaciones: any;

  constructor(
    public servicio: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicio.todasLasVacaciones().subscribe(data => {
      this.listaVacaciones = data;
      console.log(this.listaVacaciones);
    })
  }

}
