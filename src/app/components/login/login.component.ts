import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../../services/service.service";
import { Router } from '@angular/router';
import { Token } from '../../models/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  data: Token;
  mensajeKawai: any;
  mensajeBaka: any;

  bodyObject = {
    username: '',
    id: '',
    roles: [],
    accessToken: '',
    email: ''
  }

  constructor(
    private router: Router,
    private servicio: ServiceService) { }

  ngOnInit(): void {
  }

  login() {
    this.servicio.login(this.username, this.password).subscribe((data: Token) => {
      console.log("DATOS DEL BACKEND================================>")
      console.log(data);
      console.log("==================================================================>");
      this.data = data;

      if (this.data.username) {
        this.mensajeBaka = "";
        //this.mensajeKawai = "Usuario registrado: " + this.data.username; //NO TIENE SENTIDO PORQUE SI LOGIN ES SATISFACTORIO NOS VAMOS A "admin"
        this.data.username = this.data.username;
        this.data.id = this.data.id;
        this.data.roles = this.data.roles;
        this.data.accessToken = this.data.accessToken;
        this.data.email = this.data.email;
        this.data.tokenType = this.data.tokenType;
        //localStorage.setItem("token", JSON.stringify(this.data.accessToken));
        localStorage.setItem("token", this.data.accessToken);
        this.router.navigate(['admin'], { queryParams: { toAdmin: JSON.stringify(this.data) } });
      }

    }, (errorServicio) => {
      console.log("errorServicio================================>")
      console.log(errorServicio);
      console.log("==================================================================>");

      console.log("errorServicio.name: "+errorServicio.name); //SIEMPRE SALE CUANDO HAY CUALQUIER ERROR, YA SEA DE SERVER O DE USUARIO ERRONEO(CREDENCIALES)
      //"OK" CUANDO NO HAY ERROR EN CREDENDIALES
      //"Unknown Error" CUANDO ESTA DOWN
      console.log("errorServicio.statusText: "+errorServicio.statusText);
      //500 CUANDO HAY UN ERROR EN EL SERVIDOR, 401 ERROR CRENDENCIALES
      console.log("errorServicio.status: "+errorServicio.status); 
      
      if (errorServicio.error.error) { //CUANDO HAY ERROR MOSTRAMOS 
        //this.mensajeKawai = "";
        console.log("errorServicio.error.error: "+errorServicio.error.error);
        this.mensajeBaka = "USUARIO NO ENCONTRADO EN LA BASE DE DATOS. BAAAAAKA";
      }
    }
    ),
      () => console.log('LOGIN SIN PROBLEMAS DESDE EL FRONT') //ESTA MIERDA NO FUNCIONA
  }

  //FUNCION SACADA DEL FRONT DE ZAGUAN
  /*  login() : void{
         if(localStorage.getItem(environment.constantes.zgnToken) !== null){
           this.router.navigateByUrl('/zaguan');
         }else{
           this.loginService.CasAuthenticate().subscribe((zgnToken: ZaguanToken) => {
             zgnToken.token = 'Bearer ' + zgnToken.token;
             localStorage.setItem(environment.constantes.zgnToken, JSON.stringify(zgnToken));
           }); 
         } */

}
