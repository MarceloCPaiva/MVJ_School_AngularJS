import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gestao-de-Colaboradores';
  titulo = 'Gestão de Colaboradores';
  infoColaborador = { 
    id: 7, 
    nome: 'Nathan Carlos Exercicio', 
    salario: 4500, 
    cargo: 'Dev Pl' 
  }
}
