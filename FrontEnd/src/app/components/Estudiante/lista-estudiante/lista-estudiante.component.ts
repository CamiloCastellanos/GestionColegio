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

  listaEstudiante: EstudianteModel[]=[];

  constructor(private _estudianteService: EstudianteService,
    private spinnerService: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.cargarLista();
  }

  cargarLista(){
    this._estudianteService.listaEstudiante().subscribe((resp) => {
      this.listaEstudiante = [];

      resp.forEach(element => {
        let estudiante: EstudianteModel = new EstudianteModel();
        estudiante.apellidoEstudiante= element["apellidoEstudiante"];
        estudiante.direccionEstudiante= element["direccionEstudiante"];
        estudiante.fechaNacimientoEstudiante= element["fechaNacimientoEstudiante"];
        estudiante.idEstudiante= element["idEstudiante"];
        estudiante.identificacionEstudiante= element["identificacionEstudiante"];
        estudiante.nombreEstudiante= element["nombreEstudiante"];
        estudiante.telefonoEstudiante= element["telefonoEstudiante"];
        this.listaEstudiante.push(estudiante);
      });

      this.spinnerService.hide();

    }, (er) => {
      this.spinnerService.hide();
    });

  }

}
