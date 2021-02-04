import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { EstudianteModel } from 'src/app/Models/estudiante.model';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.css']
})
export class ListaEstudianteComponent implements OnInit {

  listaEstudiante: EstudianteModel[] = [];

  constructor(private toastr: ToastrService,
    private _estudianteService: EstudianteService,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.cargarLista();
  }

  cargarLista() {
    this._estudianteService.listaEstudiante().subscribe((resp) => {
      this.listaEstudiante = [];

      resp.forEach(element => {
        let estudiante: EstudianteModel = new EstudianteModel();
        estudiante.apellidoEstudiante = element["apellidoEstudiante"];
        estudiante.direccionEstudiante = element["direccionEstudiante"];
        estudiante.fechaNacimientoEstudiante = new Date(element["fechaNacimientoEstudiante"]);
        estudiante.idEstudiante = element["idEstudiante"];
        estudiante.identificacionEstudiante = element["identificacionEstudiante"];
        estudiante.nombreEstudiante = element["nombreEstudiante"];
        estudiante.telefonoEstudiante = element["telefonoEstudiante"];
        this.listaEstudiante.push(estudiante);
      });

      this.spinnerService.hide();

    }, (er) => {
      this.spinnerService.hide();
    });
  }

  eliminarestudiante(estudiante: EstudianteModel) {
    this.spinnerService.show();

    //Se valida Que el estudiante no tenga Asignaturas asignadas para que no se elimine
    if (estudiante.asignaturaEstudiante.length > 0) {
      this.toastr.error('Eliminación Fallida!', 'El estudiante tiene Asignaturas.', {
        positionClass: 'toast-bottom-right',
        timeOut: 15000
      });
      this.spinnerService.hide();
      return;
    }

    this._estudianteService.eliminarEstudiante(estudiante.idEstudiante).subscribe((resp) => {
      this.toastr.success('Eliminacion Exitosa!', 'Estudiante Eliminado', {
        positionClass: 'toast-bottom-right',
        timeOut: 15000
      });
      this.cargarLista();
      this.spinnerService.hide();

    }, (er) => {
      this.toastr.error('Eliminación Fallida!', 'Estudiante No logro ser Eliminado', {
        positionClass: 'toast-bottom-right',
        timeOut: 15000
      });

      this.spinnerService.hide();
    });

  }

}
