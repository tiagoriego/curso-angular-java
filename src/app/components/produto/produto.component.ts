import { Component } from '@angular/core';
import { Produto } from 'src/app/interfaces/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  public produtos: Produto[] = []

  constructor(private produtoService: ProdutoService) {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtos = this.produtoService.obterTodos();
  }

}
