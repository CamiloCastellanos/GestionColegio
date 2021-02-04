import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-actualizar-estudiante',
  templateUrl: './actualizar-estudiante.component.html',
  styleUrls: ['./actualizar-estudiante.component.css']
})
export class ActualizarEstudianteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formulario: NgForm) {
  }
}
