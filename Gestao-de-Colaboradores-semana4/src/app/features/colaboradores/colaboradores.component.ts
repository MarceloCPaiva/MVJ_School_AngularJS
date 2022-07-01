import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../models/colaborador.model';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent implements OnInit {
  title = 'Gestao-de-Colaboradores-semana4';

  titulo = 'Gestão de Colaboradores';

  mostraColaborador() {
    this.exibeColaborador = !this.exibeColaborador;
  }

  exibeColaborador = false;

  infoColaborador = {
    id: 7,
    nome: 'Nathan Carlos',
    salario: 4500,
    cargo: 'Dev Pleno'
  }

  colaboradores: Array<Colaborador> = [
    {
      id: 7,
      nome: 'Nathan Carlos',
      salario: 4500,
      cargo: 'Dev Pleno'
    },
    {
      id: 8,
      nome: 'Frank Lyra',
      salario: 8000,
      cargo: 'Dev Sênior'
    },
    {
      id: 9,
      nome: 'Marcelo Paiva',
      salario: 3000,
      cargo: 'Dev Júnior'
    },
    {
      id: 10,
      nome: 'João Pessoa',
      salario: 1500,
      cargo: 'Estagiário'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
