import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProfesorModel } from 'src/app/Models/profesor.model';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-adicionar-profesor',
  templateUrl: './adicionar-profesor.component.html',
  styleUrls: ['./adicionar-profesor.component.css']
})
export class AdicionarProfesorComponent implements OnInit {

  profesorCreado: ProfesorModel = new ProfesorModel();

  constructor(private _profesorService: ProfesorService,
    private spinnerService: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(formulario: NgForm) {

    if (formulario.invalid) {
      return;
    }
    this.spinnerService.show();

    this._profesorService.adicionarProfesor(this.profesorCreado).subscribe((resp) => {
      this.toastr.success('Creacion Exitosa!', 'Profesor Creada', {
        positionClass: 'toast-bottom-right',
        timeOut: 15000
      });
      this.router.navigate(["ListaProfesores"]);
      this.spinnerService.hide();
    }, (er) => {
      this.toastr.error('Creacion Fallida!', 'Profesor No logro ser Creada', {
        positionClass: 'toast-bottom-right',
        timeOut: 15000
      });

      this.spinnerService.hide();
    });

  }

}
