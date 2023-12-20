import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ClienteListaComponent } from './components/cliente-lista/cliente-lista.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FirstModelComponent } from './components/first-model/first-model.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { ProdutoDetalhesComponent } from './components/produto-detalhes/produto-detalhes.component';
import { ConsultaCepComponent } from './components/consulta-cep/consulta-cep.component';

const routes: Routes = [
  { path: '', component: FirstModelComponent },
  { path: 'primeiro-componente', component: FirstComponentComponent },
  { path: 'clientes', component: ClienteListaComponent },
  { path: 'produtos', component: ProdutoComponent },
  { path: 'produto-detalhes/:idProduto', component: ProdutoDetalhesComponent },
  { path: 'consulta-cep', component: ConsultaCepComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
