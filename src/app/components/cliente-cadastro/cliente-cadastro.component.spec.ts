import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCadastroComponent } from './cliente-cadastro.component';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ClienteCadastroComponent', () => {
  let component: ClienteCadastroComponent;
  let fixture: ComponentFixture<ClienteCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ClienteCadastroComponent],
      providers: [ClienteService, Router, HttpClient, HttpHandler],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(ClienteCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
