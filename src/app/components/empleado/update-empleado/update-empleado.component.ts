import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from "../../../services/service.service";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-empleado',
  templateUrl: './update-empleado.component.html',
  styleUrls: ['./update-empleado.component.css']
})
export class UpdateEmpleadoComponent implements OnInit {

  id: any;
  datosEmpleado: any;
  datosPostEnvio: any;
  formu: FormGroup;



  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ServiceService
  ) { 
    this.formu = new FormGroup({
      nombre_empleado: new FormControl(),
      apellido1: new FormControl(),
      apellido2: new FormControl(),
      calle: new FormControl(),
      categoria: new FormControl(),
      cp: new FormControl(),
      cuenta_c: new FormControl(),
      departamento: new FormControl(),
      dni: new FormControl(),
      email: new FormControl(),
      fecha_ini: new FormControl(),
      fecha_fin: new FormControl(),
      fecha_nac: new FormControl(),
      foto: new FormControl(),
      foto_min: new FormControl(),
      grupo_vacaciones: new FormControl(),
      id_empl: new FormControl(),
      id_key_empleado: new FormControl(),
      letra: new FormControl(),
      numero: new FormControl(),
      parentesco: new FormControl(),
      piso: new FormControl(),
      puesto: new FormControl(),
      seg_soc: new FormControl(),
      telefono: new FormControl(),
      telefono_contacto: new FormControl()
  });
  }

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
  }

  actualiza(){
    //this.consolesActualiza();
    console.log("Actualiza");
    this.service.actualizaEmpleado(this.id, this.formu.value).subscribe(data =>{
      //this.datosPostEnvio = data;
      console.log(data);
    })
  }

  consolesActualiza(){
    console.log("empleadoForm");
    console.log(this.formu.value.nombre_empleado);
    console.log(this.formu.value.apellido1);
    console.log(this.formu.value.apellido2);
    console.log(this.formu.value.calle);
    console.log(this.formu.value.categoria);
    console.log(this.formu.value.cp);
    console.log(this.formu.value.cuenta_c);
    console.log(this.formu.value.dni);
    console.log(this.formu.value.email);
    console.log(this.formu.value.fecha_ini);
    console.log(this.formu.value.fecha_fin);
    console.log(this.formu.value.fecha_nac);
    console.log(this.formu.value.foto);
    console.log(this.formu.value.foto_min);
    console.log(this.formu.value.grupo_vacaciones);
    console.log(this.formu.value.id_empl);
    console.log(this.formu.value.id_key_empleado);
    console.log(this.formu.value.letra);
    console.log(this.formu.value.numero);
    console.log(this.formu.value.parentesco);
    console.log(this.formu.value.piso);
    console.log(this.formu.value.puesto);
    console.log(this.formu.value.seg_soc);
    console.log(this.formu.value.telefono);
    console.log(this.formu.value.telefono_contacto);
  };

}


/* empleadoActual.setNombre_empleado(empl.get(nombre_empleado); 
empleadoActual.setApellido1(empl.get(apellido1);
empleadoActual.setApellido2(empl.get(apellido2);
empleadoActual.setCalle(empl.get(calle);
empleadoActual.setCategoria(empl.get(categoria);
empleadoActual.setCp(empl.get(cp);
empleadoActual.setCuenta_c(empl.get(cuenta_c);
empleadoActual.setDni(empl.get(dni);
empleadoActual.setEmail(empl.get(email);
empleadoActual.setFecha_ini(empl.get(fecha_ini);
empleadoActual.setFecha_fin(empl.get(fecha_fin);
empleadoActual.setFecha_nac(empl.get(fecha_nac);
empleadoActual.setFoto(empl.get(foto);
empleadoActual.setFoto_min(empl.get(foto_min);
empleadoActual.setGrupo_vacaciones(empl.get(grupo_vacaciones);
empleadoActual.setId_empl(empl.get(id_empl);
empleadoActual.setId_key_empleado(empl.get(id_key_empleado);
empleadoActual.setLetra(empl.get(letra);
empleadoActual.setNumero(empl.get(numero);
empleadoActual.setParentesco(empl.get(parentesco);
empleadoActual.setPiso(empl.get(piso);
empleadoActual.setPuesto(empl.get(puesto);
empleadoActual.setSeg_soc(empl.get(seg_soc);
empleadoActual.setTelefono(empl.get(telefono);
empleadoActual.setTelefono_contacto(empl.get(telefono_contacto);
 */