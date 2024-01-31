import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListaComponent } from './cliente-lista.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CustomHeaderComponent } from '../custom-header/custom-header.component';
import { CustomFooterComponent } from '../custom-footer/custom-footer.component';

describe('ClienteListaComponent', () => {
  let component: ClienteListaComponent;
  let fixture: ComponentFixture<ClienteListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ClienteListaComponent, CustomHeaderComponent, CustomFooterComponent],
      providers: [ClienteService, Router],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ClienteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
