import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListaComponent } from './components/cliente-lista/cliente-lista.component';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component'
import { BootstrapModule } from './modules/bootstrap/bootstrap.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { CustomFooterComponent } from './components/custom-footer/custom-footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'
import { HttpInterceptorProviders } from './interceptors/http-interceptor';
import { DestaqueDirective } from './directives/destaque.directive';
import { UserDirective } from './directives/user.directive';
import { ListFilterPipe } from './pipes/list-filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { AcessoNegadoComponent } from './components/acesso-negado/acesso-negado.component';
import { ClienteEditarComponent } from './components/cliente-editar/cliente-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListaComponent,
    ClienteCadastroComponent,
    CustomHeaderComponent,
    CustomFooterComponent,
    HomeComponent,
    LoginComponent,
    DestaqueDirective,
    UserDirective,
    ListFilterPipe,
    PhonePipe,
    AcessoNegadoComponent,
    ClienteEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BootstrapModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
