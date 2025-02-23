import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Aluno } from '@app/aluno';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  formulario = new FormGroup ({
    nome:      new FormControl ('',    [Validators.required, Validators.minLength(3)]),
    idade:     new FormControl ( null, [Validators.required, Validators.min(0), Validators.max(120)]),
    turma:     new FormControl ('',    [Validators.required, Validators.minLength(3)]),
  })

  //Vetor
  vetor: Aluno[] = [];

  //Função de cadastro

  cadastrar() {
    this.vetor.push(this.formulario.value as unknown as Aluno);

    this.formulario.reset();

    console.table(this.vetor);



  }



}
