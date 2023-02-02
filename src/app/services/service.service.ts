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

  //ESTE ES EL PROYECTO COPIADO QUE ESTOY USANDO A 2023

  headers: HttpHeaders;
  token: any;
  url= `http://localhost:8080/api/auth/signup`;
  url1= `http://localhost:8080/api/auth/signin`;
  url2= `http://localhost:8080/admin/lista-empleados`;
  url3= `http://localhost:8080/admin/saveVacaciones?id=11`;
  url4= `http://localhost:8080/vacaciones/lista-vacaciones`;
  url5= `http://localhost:8080/admin/empleado`;
  url6= `http://localhost:8080/admin/actualizaEmpleado`;
  url7= `http://localhost:8080/admin/todas-las-vacaciones`;
  url8= `http://localhost:8080/admin/claseprueba`;
  //url7= `http://localhost:8080/admin/saveVacaciones`;
  //url3= `http://localhost:8080/api/auth/buscador?t=${this.termino}`;

  getQuery(query: string){
    const url = `http://localhost:8080/admin/empleado/${query}`;

    /* const headers = new HttpHeaders({ //MIRAR SI EL TOKEN EXPIRÓ, SE RENUEVA CADA 1 HORA
      'Authorization': 'Bearer '+this.token
    }); */

    return this.http.get(url);
  }

  getQueryActualizaEmpleado(query: string, formu: any){
    const url = `http://localhost:8080/admin/actualizaEmpleado/${query}`;

    /* const headers = new HttpHeaders({ //MIRAR SI EL TOKEN EXPIRÓ, SE RENUEVA CADA 1 HORA
      'Authorization': 'Bearer '+this.token
    }); */

    return this.http.put(url, formu);
  }
  

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

  registroFake(data: any){
    console.log("EJECUTANDO registroFake");

    /* let data = {
      id_empleado: null,
      nombre: "BENEHARO",
      dni: "email",
      clave: "pass",
      password: "pass",
      fecha_ini: "2000-01-01",
      fecha_fin: "2000-01-01",
      tipo_contrato: "pass",
      tipo_jornada: "pass",
      puesto: "pass",
      categoria: "pass",
      grupo: "pass",
      canal: "pass",
      empresa: "pass",
      grupo_vacaciones: 0,
      salario: 0,
      complementos: "pass",
      observaciones: "pass",
      role: ['user','admin'] 
    } */
    /* `id_empleado`, `nombre`, `dni`, `clave`, `fecha_ini`,
     `fecha_fin`, `tipo_contrato`, `tipo_jornada`, `puesto`,
      `categoria`, `grupo`, `canal`, `empresa`, `grupo_vacaciones`,
       `salario`, `complementos`, `observaciones` */

      // 1,  'MARIA DE LA LUZ', '42869959Y', '67', '2007-01-03', NULL, 'indefinido', 'completa', 'Cajero/a', 'Cajero/a', '5', 'T01', 'ANIDIA', 8, 15000, '', 'Teleoperadora'   
    return this.http.post(this.url, data);
  }
  clasePrueba(data: any){  
    return this.http.post(this.url8, data);
  }

  empleado(termino: string){
    return this.getQuery(termino);
  }

  actualizaEmpleado(termino: string, formu: any){
    return this.getQueryActualizaEmpleado(termino, formu);
  }

  vacaciones(data:any){

    /* let data = {
      //id: 1,
      fecha_ini: null,
      fecha_fin: null,
      numero_dias: null,
      motivo_cambio: null,
      estado_Adm: "",
      estado_Resp: "",
      estado: "S"
      //user: 1   
    } */
    //return this.http.post(this.url3, data);
    return this.http.post(this.url3, data);
  }

  todasLasVacaciones(){
    return this.http.get(this.url7);
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

  listaEmpleados1(){
    console.log("EJECUTANDO LISTA EMPLEADOS");
    return this.http.get(this.url2);
  }

  listaEmpleados(){
    console.log("EJECUTANDO LISTA EMPLEADOS");
    console.log("this.headers =======> "+this.headers);
    this.updateHeader();
    return this.http.get(this.url2, {headers: this.headers});
  }

  listaVacaciones(){
    return this.http.get(this.url4);
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

  //////////////////////////////////////////////////// RECUPERAR DATOS DEL STORAGE ///////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  private _token: any;

  public get token1(): string {

      this._token = sessionStorage.getItem('token');
      return this._token;

  }

  //////////////////////////////////////////// EMPLEADO Y FUNCIONES authService.hasRole() ///////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  private _usuario: Token;

  public get usuario(): Token {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && sessionStorage.getItem('token') != null) {
      this._usuario = JSON.parse(sessionStorage.getItem('token') || '{}') as Token;
      return this._usuario;
    }
    return new Token();
  }

  hasRole(role: string): boolean {
    if (this.usuario.roles.includes(role)) {
      return true;
    }
    return false;
  }

  hasRoleAdmin(): boolean {
    if(this.usuario.roles.includes("ROLE_ADMIN")){
      return true;
    }
    return false;
  }

  hasRoleUser(): boolean {
    let roles = this.usuario.roles.filter(a=>a === "ROLE_ADMIN");
    if(roles.length==0){
      return true;
    }
    return false;
  }

}
