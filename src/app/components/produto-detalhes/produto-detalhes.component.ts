import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Produto } from 'src/app/interfaces/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent {
  public produto: Produto | undefined;
  public idProduto: string = '';

  constructor(private produtoService: ProdutoService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.idProduto = params['idProduto']
      this.produto = this.produtoService.obterPorId(this.idProduto);
    });
  }
}
