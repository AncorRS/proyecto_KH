import { Component, OnInit, Input } from '@angular/core';
import { List } from 'immutable';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from "../../services/service.service";
import { Token } from 'src/app/models/token';

@Component({
  selector: 'app-ficha-empleado',
  templateUrl: './ficha-empleado.component.html',
  styleUrls: ['./ficha-empleado.component.css']
})
export class FichaEmpleadoComponent implements OnInit {
/*   @Input() numbers = List<number>();
  @Input() multiplier: number; */
  /* @Input() empleados = List<String>(); */
  id: any;
  datosEmpleado: any;
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
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ServiceService
  ) { }

  //EN EL COMPONENTE LISTA-EMPLEADOS HAY UNA MOVIDA EN LA LINEA 41 QUE SE RELACIONA CON ESTE COMPONENTE
  //ALGUN EXPERIMENTO ESTUVE HACIENDO YO, INVESTIGAR!!!!!
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('ida'));
      this.id = params.get('ida')
      // hacer algo con el objeto
    });

    this.service.empleado(this.id).subscribe(data =>{
      this.datosEmpleado = data;
      console.log(this.datosEmpleado)
    });

    console.log("=======================================ADMIN=============================================");
    //TRAEMOS TODA LA MANDANGA DEL USUARIO DESDE EL SERVER MEDIANTE localStorage
    this.tokenCompletoString = localStorage.getItem('token_completo');
    this.token_completo_Json = JSON.parse(this.tokenCompletoString); //TOKEN COMPLETO CON TOOOOODA LA MANDANGUITA

    //LO MISMO MEDIANTE SERVICIO
    this.token1 = JSON.parse(this.service.token1);

          //INTENTAMOS TRAER OBJETO DESDE LA URL
    this.bodyObjectString = this.activatedRoute.snapshot.queryParams; //NO ES STRING, ES DE TIPO "Params"

    //INTENTAMOS TRAER OBJETO DESDE LA URL
    this.activatedRoute.paramMap.subscribe(params => {
      this.data = params.get('toAdmin');
      this.data1 = this.data;
    });
    }


  toUpdateEmpleado(){
    console.log("toUpdateEmpleado");
    this.router.navigate(['/empleado/update-empleado', this.token1.id]);
  }


 /*  get multiples(): List<number> {
    return this.numbers.map(a => a * this.multiplier).toList();
  } */

  /* get empleado(): List<String> {
    return this.empleados.map(b => console.log(b)).toList();
  }  */

/*   ngOnChanges() {
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
