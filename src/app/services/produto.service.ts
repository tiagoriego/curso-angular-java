import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos: Produto[] = [];

  constructor() {
    this.produtos.push({
      id: '10',
      nome: 'Camiseta Preta',
      descricao: 'Uma bela camiseta preta',
      valor: 59.99,
    },
    {
      id: '20',
      nome: 'Camiseta Braca',
      descricao: 'Uma bela camiseta braca',
      valor: 69.99,
    });
  }

  obterTodos(): Produto[] {
    return this.produtos;
  }

  obterPorId(id: string): Produto | undefined {
    return this.produtos.find(p => p.id === id);
  }
}
