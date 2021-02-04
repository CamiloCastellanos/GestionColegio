import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adicionar-estudiante',
  templateUrl: './adicionar-estudiante.component.html',
  styleUrls: ['./adicionar-estudiante.component.css']
})
export class AdicionarEstudianteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formulario: NgForm) {
  }

}
