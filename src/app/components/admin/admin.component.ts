import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Token } from 'src/app/models/token';
import { ServiceService } from "../../services/service.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  bodyObjectString: any; //NO ES STRING, ES DE TIPO "Params"
  bodyObject: Token;
  adios: any;
  id1: any;
  id2: any;
  tokenStringFromLocalStorage: any;
  usuario: any;
  token_completo_Json: Token;
  tokenCompletoString: any;
  
  constructor(
    public activatedRoute: ActivatedRoute,
    public servicio: ServiceService
    ) 
    { }
    
    ngOnInit(): void {
      this.usuario = localStorage.getItem('usuario');
      this.tokenStringFromLocalStorage = localStorage.getItem('token'); //RECUPERAMOS TOKEN
      this.tokenCompletoString = localStorage.getItem('token_completo');
      this.token_completo_Json = JSON.parse(this.tokenCompletoString); //TOKEN COMPLETO CON TOOOOODA LA MANDANGUITA
      console.log("TOKEN_LOCALSTORAGE: "+this.tokenStringFromLocalStorage);

      console.log("token_completo_Json==================================>")
      console.log(this.token_completo_Json);
      console.log("=====================================================>")

      console.log("this.activatedRoute.snapshot.queryParams =================================>");
      console.log(this.activatedRoute.snapshot.queryParams);
      console.log("==================================================================>");
      /* this.bodyObject = this.activatedRoute.snapshot.queryParams;
      this.bodyObject = JSON.parse(this.bodyObject.mensajeKawai); */
      this.bodyObjectString = this.activatedRoute.snapshot.queryParams; //NO ES STRING, ES DE TIPO "Params"
      this.bodyObject = JSON.parse(this.bodyObjectString.toAdmin);

      console.log(this.bodyObject.username);
      console.log(this.bodyObject.id);
      console.log(this.bodyObject.roles);
      //console.log(this.bodyObject['adios']);

  }

  
  }




