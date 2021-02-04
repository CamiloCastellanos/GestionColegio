import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AsignaturaModel } from 'src/app/Models/asignatura.model';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-lista-asignatura',
  templateUrl: './lista-asignatura.component.html',
  styleUrls: ['./lista-asignatura.component.css']
})
export class ListaAsignaturaComponent implements OnInit {

  listaAsignatura: AsignaturaModel[] = [];

  constructor(private _asignaturaService: AsignaturaService,
    private spinnerService: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.cargarLista();
  }

  cargarLista() {
    this._asignaturaService.listaAsignatura().subscribe((resp) => {
      this.listaAsignatura = [];

      resp.forEach(element => {
        let asignatura: AsignaturaModel = new AsignaturaModel();
        asignatura.idAsignatura= element["idAsignatura"];
        asignatura.codigoAsignatura= element["codigoAsignatura"];
        asignatura.nombreAsignatura= element["nombreAsignatura"];
        this.listaAsignatura.push(asignatura);
      });

      this.spinnerService.hide();

    }, (er) => {
      this.spinnerService.hide();
    });

  }

  eliminarAsignatura(idAsignatura:number){
    this.spinnerService.show();

    this._asignaturaService.eliminarAsignatura(idAsignatura).subscribe((resp) => {
      this.toastr.success('Eliminacion Exitosa!', 'Asignatura Eliminada', {
        positionClass: 'toast-bottom-right',
        timeOut: 15000
      });
      this.cargarLista();
      this.spinnerService.hide();

    }, (er) => {
      this.toastr.error('Eliminación Fallida!', 'Asignatura No logro ser Eliminada', {
        positionClass: 'toast-bottom-right',
        timeOut: 15000
      });

      this.spinnerService.hide();
    });

  }
}
