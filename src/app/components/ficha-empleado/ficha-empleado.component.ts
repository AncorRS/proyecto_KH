import { Component, OnInit, Input } from '@angular/core';
import { List } from 'immutable';

@Component({
  selector: 'app-ficha-empleado',
  templateUrl: './ficha-empleado.component.html',
  styleUrls: ['./ficha-empleado.component.css']
})
export class FichaEmpleadoComponent implements OnInit {
  @Input() numbers = List<number>();
  @Input() multiplier: number;
  /* @Input() empleados = List<String>(); */

  constructor() { }

  ngOnInit(): void {
  }

  get multiples(): List<number> {
    return this.numbers.map(a => a * this.multiplier).toList();
  }

  /* get empleado(): List<String> {
    return this.empleados.map(b => console.log(b)).toList();
  }  */

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
  }

}
