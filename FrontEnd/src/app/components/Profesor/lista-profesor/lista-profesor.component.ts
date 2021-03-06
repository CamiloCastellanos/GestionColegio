import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProfesorModel } from 'src/app/Models/profesor.model';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-lista-profesor',
  templateUrl: './lista-profesor.component.html',
  styleUrls: ['./lista-profesor.component.css']
})
export class ListaProfesorComponent implements OnInit {

  listaProfesor:ProfesorModel[]=[];

  constructor(private toastr: ToastrService,
    private _profesorService: ProfesorService,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.cargarLista();
  }

  cargarLista() {
    this._profesorService.listaProfesor().subscribe((resp) => {
      this.listaProfesor = [];

      resp.forEach(element => {
        let profesor: ProfesorModel = new ProfesorModel();
        profesor.apellidoProfesor = element["apellidoProfesor"];
        profesor.direccionProfesor = element["direccionProfesor"];
        profesor.fechaNacimientoProfesor = new Date(element["fechaNacimientoProfesor"]);
        profesor.idProfesor = element["idProfesor"];
        profesor.identificacionProfesor = element["identificacionProfesor"];
        profesor.nombreProfesor = element["nombreProfesor"];
        profesor.telefonoProfesor = element["telefonoProfesor"];
        this.listaProfesor.push(profesor);
      });

      this.spinnerService.hide();

    }, (er) => {
      this.spinnerService.hide();
    });
  }

  eliminarProfesor(profesor:ProfesorModel){
    this.spinnerService.show();

    this._profesorService.eliminarProfesor(profesor.idProfesor).subscribe((resp) => {
      this.toastr.success('Eliminacion Exitosa!', 'Profesor Eliminado', {
        positionClass: 'toast-bottom-right',
        timeOut: 15000
      });
      this.cargarLista();
      this.spinnerService.hide();

    }, (er) => {
      this.toastr.error('Eliminación Fallida!', 'Profesor No logro ser Eliminado', {
        positionClass: 'toast-bottom-right',
        timeOut: 15000
      });

      this.spinnerService.hide();
    });
  }

}
