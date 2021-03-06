﻿using Backend.Models;
using DAO.Colegio;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Backend.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GestionarColegioController : ApiController
    {
        public  BDCOLEGIO coneccion= new BDCOLEGIO();

        // GET: api/ListaProfesores
        /// <summary>
        /// Obtiene una lista de los profesores.
        /// </summary>
        /// 
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/ListaProfesores")]
        [HttpGet]
        public IEnumerable<lista_profesores_Result> listaProfesores()
        {
            return coneccion.lista_profesores();
        }

        // GET: api/ListaEstudiantes
        /// <summary>
        /// Obtiene una lista de los estudiantes.
        /// </summary>
        /// 
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/ListaEstudiantes")]
        [HttpGet]
        public IEnumerable<lista_estudiantes_Result> listaEstudiantes()
        {
            return coneccion.lista_estudiantes();
        }

        // GET: api/ListaAsignaturas
        /// <summary>
        /// Obtiene una lista de las asignaturas.
        /// </summary>
        /// 
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/ListaAsignaturas")]
        [HttpGet]
        public IEnumerable<lista_asignaturas_Result> listaAsignaturas()
        {
            return coneccion.lista_asignaturas();
        }

        // POST: api/EliminarAsignatura
        /// <summary>
        /// Elimina una asignatura por su id.
        /// </summary>
        /// <param name="asignatura">Id de la Asignatura</param>
        /// 
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/EliminarAsignatura")]
        [HttpPost]
        public void eliminarAsignatura([FromBody] AsignaturaModel asignatura)
        {
            coneccion.eliminar_asignatura(asignatura.idAsignatura);
        }

        // POST: api/EliminarEstudiante
        /// <summary>
        /// Elimina un Estudiante por su id.
        /// </summary>
        /// <param name="estudiante">Id del estudiante</param>
        /// 
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/EliminarEstudiante")]
        [HttpPost]
        public void eliminarEstudiante([FromBody] EstudianteModel estudiante)
        {
            coneccion.eliminar_estudiante(estudiante.idEstudiante);
        }


        // POST: api/EliminarProfesor
        /// <summary>
        /// Elimina un Profesor por su id.
        /// </summary>
        /// <param name="profesor">Id del Profesor</param>
        /// 
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/EliminarProfesor")]
        [HttpPost]
        public void EliminarProfesor([FromBody] ProfesorModel profesor)
        {
            coneccion.eliminar_profesor(profesor.idProfesor);
        }


        // POST: api/CrearAsignatura
        /// <summary>
        /// Elimina una asignatura por su id.
        /// </summary>
        /// <param name="asignatura">Asignatura</param>
        /// 
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/CrearAsignatura")]
        [HttpPost]
        public void crearAsignatura([FromBody] AsignaturaModel asignatura)
        {
            coneccion.creacion_asignatura(asignatura.codigoAsignatura,asignatura.nombreAsignatura);
        }

        // POST: api/CrearProfesor
        /// <summary>
        /// Elimina una asignatura por su id.
        /// </summary>
        /// <param name="profesor">profesor</param>
        /// 
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/CrearProfesor")]
        [HttpPost]
        public void crearProfesor([FromBody] ProfesorModel profesor)
        {
            string asignaturas = "";
            foreach(AsignaturaModel asignaturaItem in profesor.asignaturaProfesor)
            {
                asignaturas += asignaturaItem.idAsignatura + ",";
            }
            coneccion.crear_profesor(
                                        profesor.nombreProfesor,
                                        profesor.apellidoProfesor,
                                        profesor.fechaNacimientoProfesor,
                                        profesor.direccionProfesor,
                                        profesor.telefonoProfesor,
                                        profesor.identificacionProfesor,
                                        asignaturas
                                    );
        }

    }
}