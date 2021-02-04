using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.Models
{
    public class EstudianteModel
    {
        public int idEstudiante { get; set; }
        public int nombreEstudiante { get; set; }
        public int apellidoEstudiante { get; set; }
        public int fechaNacimientoEstudiante { get; set; }
        public int direccionEstudiante { get; set; }
        public int telefonoEstudiante { get; set; }
        public int identificacionEstudiante { get; set; }
        public AsignaturaModel[] asignaturaEstudiante { get; set; }

    }
}