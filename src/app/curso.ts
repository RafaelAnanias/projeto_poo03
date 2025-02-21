export class Curso {
  nome: string;
  codigo: number;

  constructor(nome: string, codigo: number) {
    this.nome = nome;
    this.codigo = codigo;
  }

  // Método da classe base
  exibirInformacoes(): string {
    return `Curso: ${this.nome}, Código: ${this.codigo}`;
  }
}
