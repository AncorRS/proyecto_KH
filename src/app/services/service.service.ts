import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map, concatAll } from 'rxjs/operators';
import { Token } from '../models/token';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //termino: any ="";

  //EL BACKEND SE LLAMA: spring-boot-login-example-master
  //LOGIN: mamacita / mamacita / el correo es el mamacita@hotmail.com
  //CUANDRO CREAS UN USUARIO TIENE QUE TENER UN MINIMO DE LETRAS DE 8 O ASI
  //arrancarlo desde ------> http://localhost:4200/registro

  headers: HttpHeaders;
  token: any;
  url= `http://localhost:8080/api/auth/signup`;
  url1= `http://localhost:8080/api/auth/signin`;
  url2= `http://localhost:8080/admin/lista-empleados`;
  //url3= `http://localhost:8080/api/auth/buscador?t=${this.termino}`;
  

  constructor(private http: HttpClient) { 
    console.log("EJECUTANDO SERVICIO");
  }

  enviaRegistro(user:String, email:String, pass:String){
    console.log("EJECUTANDO enviaRegistro");

    let data = {
      username: user,
        email: email,
        password: pass,
        role: ['user','admin'] 
    }
    return this.http.post(this.url, data);
  }

  login(user:String, pass:String): Observable<Token>{
    console.log("EJECUTANDO LOGIN");

    let data = {
      username: user,
      password: pass
    }
    return this.http.post<Token>(this.url1, data).pipe(
      //PROBE A PONER DELAY DE 1 SEG. EN ESTE MAP, COMO HICE MAS ABAJO
      map(mierda => of(mierda).pipe(delay(1000))), //PARA CADA ELEMENTO SE LE APLICA 1 SEG. DE DELAY
      concatAll(),
    );
  }

  listaEmpleados(){
    console.log("EJECUTANDO LISTA EMPLEADOS");
    console.log("this.headers =======> "+this.headers);
    this.updateHeader();
    return this.http.get(this.url2, {headers: this.headers});
  }

  getNumbers(): Observable<number> {
    return of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
      map(data => of(data).pipe(delay(1000))), //PARA CADA ELEMENTO SE LE APLICA 1 SEG. DE DELAY
      concatAll(),
    );
  }

  getNumbers1(): Observable<number> {
    return of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
      map(data => of(data)),
      concatAll(),
    );
  }

  getBuscador(termino: any){
    console.log("EJECUTANDO LISTA EMPLEADOS");
    return this.http.get(`http://localhost:8080/api/auth/buscador/${termino}`);
  }

  updateHeader() : void {    
    this.token = localStorage.getItem("token");
    this.headers = new HttpHeaders().set('Authorization', 'Bearer '+this.token);
    //LA LINEA DE ARRIBA ENVIA ESTA CABECERA DE NOMBRE "Authorization" Y ESTO SE VE EN 
    //EL CHROME DENTRO DE NETWORK > HEADERS > REQUEST HEADERS 
  }

}
