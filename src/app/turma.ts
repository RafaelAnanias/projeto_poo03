import { Curso } from './curso';

export class Turma extends Curso {
  professor: string;

  constructor(nome: string, codigo: number, professor: string) {
    super(nome, codigo); // Chama o construtor da classe base (Curso)
    this.professor = professor;
  }

  // Sobrescreve o método da classe base
  override exibirInformacoes(): string {
    return `Turma: ${this.nome}, Código: ${this.codigo}, Professor: ${this.professor}`;
  }
}
