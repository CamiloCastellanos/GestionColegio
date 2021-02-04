import { AsignaturaModel } from "./asignatura.model";

export class EstudianteModel {
  public idEstudiante: number;
  public nombreEstudiante: number;
  public apellidoEstudiante: number;
  public fechaNacimientoEstudiante: number;
  public direccionEstudiante: number;
  public telefonoEstudiante: number;
  public identificacionEstudiante: number;
  public asignaturaEstudiante: AsignaturaModel[]=[];
}
