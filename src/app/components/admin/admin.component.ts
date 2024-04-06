import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Token } from 'src/app/models/token';
import { ServiceService } from "../../services/service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  token1: Token;
  data: any;
  data1: any;
  bodyObjectString: any; //NO ES STRING, ES DE TIPO "Params"
  bodyObject: Token;
  adios: any;
  id1: any;
  id2: any;
  usuario: any;
  token_completo_Json: Token;
  tokenCompletoString: any;
  role_user: string;
  a: number = 1;
  b: boolean = true;
  
  constructor(
    public activatedRoute: ActivatedRoute,
    public servicio: ServiceService,
    private router: Router
    ) {}
    
  ngOnInit(): void {
    console.log("=======================================ADMIN=============================================");
    //TRAEMOS TODA LA MANDANGA DEL USUARIO DESDE EL SERVER MEDIANTE localStorage
    this.tokenCompletoString = localStorage.getItem('token_completo');
    this.token_completo_Json = JSON.parse(this.tokenCompletoString); //TOKEN COMPLETO CON TOOOOODA LA MANDANGUITA

    //LO MISMO MEDIANTE SERVICIO
    this.token1 = JSON.parse(this.servicio.token1);

          //INTENTAMOS TRAER OBJETO DESDE LA URL
    this.bodyObjectString = this.activatedRoute.snapshot.queryParams; //NO ES STRING, ES DE TIPO "Params"

    //INTENTAMOS TRAER OBJETO DESDE LA URL
    this.activatedRoute.paramMap.subscribe(params => {
      this.data = params.get('toAdmin');
      this.data1 = this.data;
    });
    }

    ////////////////////////////////////////////FUNCIONES////////////////////////////////////////////////// 

  toFichaEmpleado(){
    console.log("toListaEmpleados");
    this.router.navigate(['/ficha-empleado', this.token1.id]);
  }

  toVacacionesEmpleado(){
    console.log("toVacacionesEmpleado");
    this.router.navigate(['/empleado/vacaciones-empleado', this.token1.id]);
  }

  toSolicitudVacaciones(){
    console.log("toSolicitudVacaciones()");
    this.router.navigate(['/empleado/solicitud-vacaciones', this.token1.id]);
  }

  toUpdateEmpleado(){
    console.log("toUpdateEmpleado");
    this.router.navigate(['/empleado/update-empleado', this.token1.id]);
  }

  toTodasSolicitudes(){
    console.log("toTodasSolicitudes");
    this.router.navigate(['/admin/listado-solicitudes']);
  }

  toMisFunciones(){
    console.log("toMisFunciones");
    //this.router.navigate(['/admin/listado-solicitudes']);
  }
  toGenerales(){
    console.log("toGenerales");
    //this.router.navigate(['/admin/listado-solicitudes']);
  }
  toNominas(){
    console.log("toNominas");
    //this.router.navigate(['/admin/listado-solicitudes']);
  }
  toDocumentosEmpresa(){
    console.log("toDocumentosEmpresa");
    //this.router.navigate(['/admin/listado-solicitudes']);
  }
  toAddEmpleado(){
    console.log("toAddEmpleado");
    this.router.navigate(['/registro']);
  }
  toListadoAltas(){
    console.log("toListadoAltas");
    //this.router.navigate(['/admin/listado-solicitudes']);
  }

}