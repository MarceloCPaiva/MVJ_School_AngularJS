import { Component, OnInit } from '@angular/core';
import { CompleteProduct } from '../../models/product.model';

@Component({
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.scss'],
})
export class ProdutosDetalhesComponent implements OnInit {
  titulo = 'Produtos';

  exibeEmEstoque = true;
  productsList: Array<CompleteProduct> = [
    {
      id: 1,
      descricao: 'Xiaomi Mi 9t',
      preco: 3049,
      quantidade: 10,
      img: 'https://imagens.trocafone.com/images/phones/xiaomi-mi-9t-pro-total.png',
      disponivel: true,
    },
    {
      id: 2,
      descricao: 'Xiaomi Mi 10T 5G',
      preco: 4999,
      quantidade: 0,
      img: 'https://http2.mlstatic.com/D_NQ_NP_795420-MLA43485432064_092020-O.webp',
      disponivel: false,
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

  precoComDesconto(preco: number) {
    return preco * 0.9;
  }

  comprar() {
    alert('Produto comprado com sucesso!');
  }
}
