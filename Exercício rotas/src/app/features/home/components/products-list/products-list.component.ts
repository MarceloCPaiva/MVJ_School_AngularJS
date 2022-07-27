import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  titulo = 'Produtos';

  products: Array<Product> = [
    {
      id: 1,
      descricao: 'Xiaomi Mi 9T',
      preco: 3049,
      quantidade: 1,
      img: 'https://imagens.trocafone.com/images/phones/xiaomi-mi-9t-pro-total.png',
      disponivel: false,
    },
    {
      id: 2,
      descricao: 'Xiaomi Mi 10T 5G',
      preco: 4999,
      quantidade: 3,
      img: 'https://http2.mlstatic.com/D_NQ_NP_795420-MLA43485432064_092020-O.webp',
      disponivel: true,
    },
    {
      id: 3,
      descricao: 'Xiaomi Mi 11',
      preco: 4199,
      quantidade: 4,
      img: 'https://http2.mlstatic.com/D_NQ_NP_2X_943328-MLA46168186001_052021-F.webp',
      disponivel: true,
    },
    {
      id: 4,
      descricao: 'Xiaomi Mi 12 Pro',
      preco: 6552.93,
      quantidade: 5,
      img: 'https://carrefourbr.vtexassets.com/arquivos/ids/56133666-800-auto?v=637893098391270000&width=800&height=auto&aspect=true',
      disponivel: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
