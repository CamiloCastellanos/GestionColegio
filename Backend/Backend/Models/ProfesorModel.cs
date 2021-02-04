using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.Models
{
    public class ProfesorModel
    {
        public int idProfesor { get; set; }
        public string nombreProfesor { get; set; }
        public string apellidoProfesor { get; set; }
        public DateTime fechaNacimientoProfesor { get; set; }
        public string direccionProfesor { get; set; }
        public string telefonoProfesor { get; set; }
        public string identificacionProfesor { get; set; }
        public AsignaturaModel[] asignaturaProfesor { get; set; }

    }
}