import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { AddressListComponent } from './components/address-list/address-list.component';
import { FirstEventComponent } from './components/first-event/first-event.component';
import { FirstModelComponent } from './components/first-model/first-model.component';
import { FormsModule } from '@angular/forms';
import { EmitterOneComponent } from './components/emitter-one/emitter-one.component';
import { EmitterTwoComponent } from './components/emitter-two/emitter-two.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClienteListaComponent } from './components/cliente-lista/cliente-lista.component';
import { PipesComponent } from './components/pipes/pipes.component';
import localePT from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { ProdutoDetalhesComponent } from './components/produto-detalhes/produto-detalhes.component';
import { ConsultaCepComponent } from './components/consulta-cep/consulta-cep.component';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePT)

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    AddressListComponent,
    FirstEventComponent,
    FirstModelComponent,
    EmitterOneComponent,
    EmitterTwoComponent,
    ClienteComponent,
    ClienteListaComponent,
    PipesComponent,
    PagenotfoundComponent,
    ProdutoComponent,
    ProdutoDetalhesComponent,
    ConsultaCepComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
