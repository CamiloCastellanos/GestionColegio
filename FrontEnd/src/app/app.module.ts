import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Componentes}
import { AppComponent } from './app.component';
import { ListaEstudianteComponent } from './components/Estudiante/lista-estudiante/lista-estudiante.component';
import { AdicionarEstudianteComponent } from './components/Estudiante/adicionar-estudiante/adicionar-estudiante.component';
import { ActualizarEstudianteComponent } from './components/Estudiante/actualizar-estudiante/actualizar-estudiante.component';
import { ListaProfesorComponent } from './components/Profesor/lista-profesor/lista-profesor.component';
import { ActualizarProfesorComponent } from './components/Profesor/actualizar-profesor/actualizar-profesor.component';
import { AdicionarProfesorComponent } from './components/Profesor/adicionar-profesor/adicionar-profesor.component';
import { ListaAsignaturaComponent } from './components/Asignatura/lista-asignatura/lista-asignatura.component';
import { AdicionarAsignarutaComponent } from './components/Asignatura/adicionar-asignaruta/adicionar-asignaruta.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { AsignaturaService } from './services/asignatura.service';
import { EstudianteService } from './services/estudiante.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaEstudianteComponent,
    AdicionarEstudianteComponent,
    ActualizarEstudianteComponent,
    ListaProfesorComponent,
    ActualizarProfesorComponent,
    AdicionarProfesorComponent,
    ListaAsignaturaComponent,
    AdicionarAsignarutaComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AsignaturaService,
    EstudianteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
