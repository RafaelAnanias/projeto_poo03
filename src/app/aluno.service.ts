import { Injectable } from '@angular/core';
import { Aluno } from './aluno';
import { Turma } from './turma';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos: Aluno[] = [];

  constructor() { }

  adicionarAluno(aluno: Aluno): void {
    this.alunos.push(aluno);
  }

  listarAlunos(): Aluno[] {
    return this.alunos;
  }
}





// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AlunoService {

//   constructor() { }
// }
