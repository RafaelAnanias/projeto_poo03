import { Injectable } from '@angular/core';
import { Aluno } from './aluno';
import { Turma } from './turma';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos: Aluno[] = [];

  constructor() {
    // Adiciona alunos de exemplo
    const turma1 = new Turma('Matemática', 101, 'Prof. Silva');
    const turma2 = new Turma('História', 102, 'Prof. Souza');
    const turma3 = new Turma('Ciências', 103, 'Prof. Santos');

    this.alunos.push(new Aluno('Alice', 20, turma1));
    this.alunos.push(new Aluno('Bruno', 22, turma2));
    this.alunos.push(new Aluno('Carla', 19, turma3));
  }

  adicionarAluno(aluno: Aluno): void {
    this.alunos.push(aluno);
  }

  listarAlunos(): Aluno[] {
    return this.alunos;
  }
}
