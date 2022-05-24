import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../../services/service.service";
import { Router } from '@angular/router';
import { Token } from '../../models/token';
//import {MatDialogModule} from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalLoginComponent } from '../../modales/modal-login/modal-login.component';
import {Message,MessageService} from 'primeng/api';
//import { Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

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
  msgs2: Message[];

  bodyObject = {
    username: '',
    id: '',
    roles: [],
    accessToken: '',
    email: ''
  }

  constructor(
    private router: Router,
    private servicio: ServiceService,
    public dialog: MatDialog,
    //private messageService: MessageService, 
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true; //ESTO ES NECESARIO PARA EL PRIMENG
  }

  addMessages(text: string) {
    this.msgs2 = [
      //{ severity: 'success', summary: 'Success', detail: 'Message Content' },
      //{ severity: 'info', summary: 'Info', detail: 'Message Content' },
      //{ severity: 'warn', summary: 'Warning', detail: 'Message Content' },
      { severity: 'error', summary: 'Error', detail: text } //PARA EL ALERT DIALOG CREO
    ];
  }

  /* showViaService() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  } */

  //BOTON "Launch demo modal" DE ANGULAR MATERIAL
  openDialog() {
    const dialogRef = this.dialog.open(ModalLoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //PASANDOLE DATOS AL BOTON "Launch demo modal" DE ANGULAR MATERIAL
  openDialog1(a: string) {
    this.dialog.open(ModalLoginComponent, {
      data: {
        //animal: 'unicorn',
        animal: a,
      },
    });
  }

  login() {
    this.servicio.login(this.username, this.password).subscribe((data: Token) => {
      console.log("DATOS DEL BACKEND================================>")
      console.log(data);
      console.log("==================================================================>");
      this.data = data;

      if (this.data.username) {
        localStorage.setItem('usuario', this.data.username); //METEMOS NOMBRE EN EL LOCALSTORAGE
        localStorage.setItem('token_completo',JSON.stringify(this.data)); //METEMOS TOOOOODA LA INFO COMPLETA EN LOCALSTORAGE
        this.mensajeBaka = "";
        //this.mensajeKawai = "Usuario registrado: " + this.data.username; //NO TIENE SENTIDO PORQUE SI LOGIN ES SATISFACTORIO NOS VAMOS A "admin"
        this.data.username = this.data.username;
        this.data.id = this.data.id;
        this.data.roles = this.data.roles;
        this.data.accessToken = this.data.accessToken; //METEMOS SOLAMENTE EL TOKEN
        this.data.email = this.data.email;
        this.data.tokenType = this.data.tokenType;
        //localStorage.setItem("token", JSON.stringify(this.data.accessToken));
        //METEMOS SOLAMENTE EL TOKEN EN EL LOCALSTORAGE
        localStorage.setItem("token", this.data.accessToken);
        //ENVIAMOS LOS DATOS A "admin" PERO EL CASO ES QUE APARECEN EN LA URL Y ESO NO PUEDE SER
        this.router.navigate(['admin'], { queryParams: { toAdmin: JSON.stringify(this.data) } });
      }

    }, (errorServicio) => {
      console.log("errorServicio================================>")
      console.log(errorServicio);
      console.log("==================================================================>");

      console.log("errorServicio.name: " + errorServicio.name); //SIEMPRE SALE CUANDO HAY CUALQUIER ERROR, YA SEA DE SERVER O DE USUARIO ERRONEO(CREDENCIALES)
      //"OK" CUANDO NO HAY ERROR EN CREDENDIALES
      //"Unknown Error" CUANDO ESTA DOWN
      console.log("errorServicio.statusText: " + errorServicio.statusText);
      //500 CUANDO HAY UN ERROR EN EL SERVIDOR, 401 ERROR CRENDENCIALES
      console.log("errorServicio.status: " + errorServicio.status);

      if (errorServicio.error.message == "Bad credentials") { //CUANDO HAY ERROR MOSTRAMOS 
        //this.mensajeKawai = "";
        this.openDialog1(errorServicio.error.message);
        console.log("errorServicio.error.error: " + errorServicio.error.error);
        this.mensajeBaka = "USUARIO NO ENCONTRADO EN LA BASE DE DATOS. BAAAAAKA";
        this.addMessages(this.mensajeBaka); //PRIMENG
      }

      if (errorServicio.error.error) { //CUANDO HAY ERROR MOSTRAMOS 
        //this.mensajeKawai = "";
        console.log("errorServicio.error.error: " + errorServicio.error.error);
        this.mensajeBaka = "USUARIO NO ENCONTRADO EN LA BASE DE DATOS. BAAAAAKA";
      }

      /*  if (errorServicio.status) { //CUANDO HAY ERROR MOSTRAMOS 
         //this.mensajeKawai = "";
         this.openDialog();
         console.log("errorServicio.error.error: "+errorServicio.error.error);
         this.mensajeBaka = "USUARIO NO ENCONTRADO EN LA BASE DE DATOS. BAAAAAKA";
       } */
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
