import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: ListaAlunosComponent },
  {path: 'Cadastro', component: CadastroComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
