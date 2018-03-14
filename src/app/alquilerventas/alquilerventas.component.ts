import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../providers/servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { alquiler } from '../model/alquiler';
import { servicio } from '../model/servicio';

@Component({
  selector: 'app-alquilerventas',
  templateUrl: './alquilerventas.component.html',
  styleUrls: ['./alquilerventas.component.scss']
})
export class AlquilerventasComponent implements OnInit {


  todos: alquiler[];
  




  constructor(public servicioService: ServicioService) {
    this.todos = [];



  }

  ngOnInit() {

    console.log('TodosComponent ngOnInit');
    this.servicioService.getCasas().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }



  mapeo(result: any) {

    let todo: alquiler;
    result.forEach(el => {
      todo = new alquiler();
      todo.nombre = el.nombre;
      todo.precio = el.precio;
      todo.direccion = el.direccion;
      todo.foto = el.foto;
      todo.habitaciones = el.habitaciones;
      todo.alquiler = el.alquiler;
      this.todos.push(todo);
    });

  }
}
