import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdicionarAsignarutaComponent } from './components/Asignatura/adicionar-asignaruta/adicionar-asignaruta.component';
import { ActualizarEstudianteComponent } from './components/Estudiante/actualizar-estudiante/actualizar-estudiante.component';
import { AdicionarEstudianteComponent } from './components/Estudiante/adicionar-estudiante/adicionar-estudiante.component';
import { ListaEstudianteComponent } from './components/Estudiante/lista-estudiante/lista-estudiante.component';
import { HomeComponent } from './components/home/home.component';
import { ActualizarProfesorComponent } from './components/Profesor/actualizar-profesor/actualizar-profesor.component';
import { AdicionarProfesorComponent } from './components/Profesor/adicionar-profesor/adicionar-profesor.component';
import { ListaProfesorComponent } from './components/Profesor/lista-profesor/lista-profesor.component';


const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"ListaEstudiantes",component:ListaEstudianteComponent},
  {path:"AdicionarEstudiantes",component:AdicionarEstudianteComponent},
  {path:"ActualizarEstudiantes",component:ActualizarEstudianteComponent},
  {path:"ListaProfesores",component:ListaProfesorComponent},
  {path:"AdicionarProfesores",component:AdicionarProfesorComponent},
  {path:"ActualizarProfesoress",component:ActualizarProfesorComponent},
  {path:"ListaAsignaturas",component:ListaEstudianteComponent},
  {path:"AdicionarAsignaturas",component:AdicionarAsignarutaComponent},
  {path:"**", redirectTo:"Home",pathMatch:"full"},
  { path: '', pathMatch: 'full', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
