import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EstudanteComponent } from './estudante/estudante.component';
import { ProfessorComponent } from './professor/professor.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';


@NgModule({
  declarations: [
    AppComponent,
    EstudanteComponent,
    ProfessorComponent,
    DisciplinaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
