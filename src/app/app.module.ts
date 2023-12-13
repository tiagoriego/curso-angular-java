import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { AddressListComponent } from './components/address-list/address-list.component';
import { FirstEventComponent } from './components/first-event/first-event.component';
import { FirstModelComponent } from './components/first-model/first-model.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    AddressListComponent,
    FirstEventComponent,
    FirstModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
