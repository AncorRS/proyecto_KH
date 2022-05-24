import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Token } from 'src/app/models/token';
import { ServiceService } from "../../services/service.service";

@Component({
  selector: 'app-lista-vacaciones',
  templateUrl: './lista-vacaciones.component.html',
  styleUrls: ['./lista-vacaciones.component.css']
})
export class ListaVacacionesComponent implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute,
    public servicio: ServiceService
  ) { }

  ngOnInit(): void {
    this.listaVacaciones();
  }

  listaVacaciones(): void {
    this.servicio.listaVacaciones().subscribe(data => {
      console.log(data);
    })
  }

}
