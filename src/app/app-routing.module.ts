import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListaComponent } from './components/cliente-lista/cliente-lista.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { rulesGuard } from './guards/rules.guard';
import { AcessoNegadoComponent } from './components/acesso-negado/acesso-negado.component';
import { ClienteEditarComponent } from './components/cliente-editar/cliente-editar.component';

const routes: Routes = [
  {
    path: 'cliente-lista',
    component: ClienteListaComponent,
    canActivate: [authGuard, rulesGuard],
    data: { rules: ['LISTAR_CLIENTE'] },
  },
  {
    path: 'cadastro-cliente',
    component: ClienteCadastroComponent,
    canActivate: [authGuard, rulesGuard],
    data: { rules: ['CADASTRAR_CLIENTE'] },
  },
  {
    path: 'editar-cliente/:id',
    component: ClienteEditarComponent,
    canActivate: [authGuard, rulesGuard],
    data: { rules: ['EDITAR_CLIENTE'] },
  },
  {
    path: 'acesso-negado',
    component: AcessoNegadoComponent,
    canActivate: [authGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
