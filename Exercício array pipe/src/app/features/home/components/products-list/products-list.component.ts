import { Component, OnInit } from '@angular/core';
// import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  titulo = 'Tarefas';

  tasks = [
    {
      id: 1,
      description: 'Criar um projeto básico',
      completed: false,
      inclusionDate: '2021-07-21',
    },
    {
      id: 2,
      description: 'Colocar o lixo para fora até as 19h',
      completed: true,
      inclusionDate: '2021-07-22',
    },
    {
      id: 3,
      description: 'Fazer o jantar até as 22h',
      completed: true,
      inclusionDate: '2021-07-20',
    },
    {
      id: 4,
      description: 'Reunião de alinhamento dia 18/07 as 14h',
      completed: true,
      inclusionDate: '2021-07-21',
    },
    {
      id: 5,
      description: 'Reunião de alinhamento projeto bradesco 18/07 as 16h',
      completed: false,
      inclusionDate: '2021-07-19',
    },
    {
      id: 6,
      description: 'Criar conteúdo da aula',
      completed: false,
      inclusionDate: '2021-07-18',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
