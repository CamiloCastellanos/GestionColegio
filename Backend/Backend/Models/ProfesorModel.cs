using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.Models
{
    public class ProfesorModel
    {
        public int idProfesor { get; set; }
        public int nombreProfesor { get; set; }
        public int apellidoProfesor { get; set; }
        public int fechaNacimientoProfesor { get; set; }
        public int direccionProfesor { get; set; }
        public int telefonoProfesor { get; set; }
        public int identificacionProfesor { get; set; }
        public AsignaturaModel[] asignaturaProfesor { get; set; }

    }
}