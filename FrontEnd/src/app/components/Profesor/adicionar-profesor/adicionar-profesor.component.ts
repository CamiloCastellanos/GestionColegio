import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adicionar-profesor',
  templateUrl: './adicionar-profesor.component.html',
  styleUrls: ['./adicionar-profesor.component.css']
})
export class AdicionarProfesorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(formulario: NgForm) {
  }

}
