import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { ServiceService } from "../../services/service.service";
import { List } from 'immutable';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  usuarios: any = [];
  usuariosBuscador: any = [];
  data: any = [];
  //numbers: any = [];

  numbers = List<number>();
  number: any = []; //SIN LIST TAMBIEN FUNCIONA
  multiplicador: number = 10;
  empleados: any = [];

  constructor(
    private servicio: ServiceService,
    private changeDetection: ChangeDetectorRef
  ) 
  { }

  ngOnInit(): void {
    //this.listaEmpleados();
    this.lista();
    //this.getNumbers();
  }

  lista = async () =>{
    //const numeros = await this.getNumbers();
    const emp = await this.listaEmpleados()

  }
  
  listaEmpleados(){
    this.servicio.listaEmpleados().subscribe(data => {
      console.log("EMPLEADOS=================>");

      console.log(data);
      this.data = data;
      this.empleados = this.empleados.push(data);
      this.changeDetection.markForCheck();
     /*  this.numbers = this.numbers.push(this.data);             // <-- need immutable data
       this.changeDetection.markForCheck();                // <-- need to update the DOM
       console.log(this.numbers); */

      this.usuarios = data;
    });
  }

  getNumbers(){
    this.servicio.getNumbers().subscribe(data => {
      this.numbers = this.numbers.push(data);             // <-- need immutable data
      this.changeDetection.markForCheck();                // <-- need to update the DOM

      this.number = data; ////SIN LIST TAMBIEN FUNCIONA
      console.log("NUMBERS=================>");

    });
  }

  buscar(termino: string){
    console.log(termino);
    if(termino!=""){
    this.servicio.getBuscador(termino).subscribe((data: any) =>{
      //console.log(data.artists.items);
      //this.artistas=data.artists.items;
      console.log(data);
      this.usuariosBuscador=data;
      //this.loading=false;
    })
    }
  }

  doSomething(e:any) {
    e.stopPropagation();
    e.preventDefault();

    console.log("This onClick method should prevent routerLink from executing.");

    return false;
  }

  onEvent(event:any) {
    event.stopPropagation();
  }
/* 
  ngOnChanges() {
    console.log('OnChanges:ExampleComponent');
  }

  ngDoCheck() {
    console.log('DoCheck:ExampleComponent');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit:ExampleComponent');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit:ExampleComponent');
  } */
}
