import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AsignaturaModel } from 'src/app/Models/asignatura.model';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-asignaruta',
  templateUrl: './adicionar-asignaruta.component.html',
  styleUrls: ['./adicionar-asignaruta.component.css']
})
export class AdicionarAsignarutaComponent implements OnInit {

  asignaturaCreada:AsignaturaModel= new AsignaturaModel();

  constructor(private _asignaturaService: AsignaturaService,
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
    this._asignaturaService.adicionarAsignatura(this.asignaturaCreada).subscribe((resp) => {
      this.toastr.success('Creacion Exitosa!', 'Asignatura Creada', {
        positionClass: 'toast-bottom-right',
        timeOut: 15000
      });
      this.router.navigate(["ListaAsignaturas"]);
      this.spinnerService.hide();
    }, (er) => {
      this.toastr.error('Creacion Fallida!', 'Asignatura No logro ser Creada', {
        positionClass: 'toast-bottom-right',
        timeOut: 15000
      });

      this.spinnerService.hide();
    });


  }


}
