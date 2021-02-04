import { AsignaturaModel } from "./asignatura.model";

export class ProfesorModel {
  public idProfesor: number;
  public nombreProfesor: number;
  public apellidoProfesor: number;
  public fechaNacimientoProfesor: Date;
  public direccionProfesor: number;
  public telefonoProfesor: number;
  public identificacionProfesor: number;
  public asignaturaProfesor: AsignaturaModel[]=[];
}
