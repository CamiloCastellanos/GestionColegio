﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAO.Colegio
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class BDCOLEGIO : DbContext
    {
        public BDCOLEGIO()
            : base("name=BDCOLEGIO")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
    
        public virtual int eliminar_asignatura(Nullable<long> id_Asignatura)
        {
            var id_AsignaturaParameter = id_Asignatura.HasValue ?
                new ObjectParameter("id_Asignatura", id_Asignatura) :
                new ObjectParameter("id_Asignatura", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("eliminar_asignatura", id_AsignaturaParameter);
        }
    
        public virtual int eliminar_estudiante(Nullable<long> id_estudiante)
        {
            var id_estudianteParameter = id_estudiante.HasValue ?
                new ObjectParameter("id_estudiante", id_estudiante) :
                new ObjectParameter("id_estudiante", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("eliminar_estudiante", id_estudianteParameter);
        }
    
        public virtual int eliminar_profesor(Nullable<long> id_profesor)
        {
            var id_profesorParameter = id_profesor.HasValue ?
                new ObjectParameter("id_profesor", id_profesor) :
                new ObjectParameter("id_profesor", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("eliminar_profesor", id_profesorParameter);
        }
    
        public virtual ObjectResult<lista_asignaturas_Result> lista_asignaturas()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<lista_asignaturas_Result>("lista_asignaturas");
        }
    
        public virtual ObjectResult<lista_estudiantes_Result> lista_estudiantes()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<lista_estudiantes_Result>("lista_estudiantes");
        }
    
        public virtual ObjectResult<lista_profesores_Result> lista_profesores()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<lista_profesores_Result>("lista_profesores");
        }
    }
}