import { Turma } from './turma';

export class Aluno {
  nome: string;
  idade: number;
  turma: Turma;

  constructor(nome: string, idade: number, turma: Turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }
}
