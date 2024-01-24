import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListaComponent } from './components/cliente-lista/cliente-lista.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { LoginService } from './services/login.service';
import { rulesGuard } from './guards/rules.guard';

const routes: Routes = [
  {
    path: 'cliente-lista',
    component: ClienteListaComponent,
    canActivate: [authGuard],
  },
  {
    path: 'cadastro-cliente',
    component: ClienteCadastroComponent,
    canActivate: [authGuard, rulesGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
