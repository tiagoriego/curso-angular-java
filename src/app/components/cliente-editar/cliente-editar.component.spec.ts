import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEditarComponent } from './cliente-editar.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, RendererFactory2 } from '@angular/core';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

describe('ClienteEditarComponent', () => {
  let component: ClienteEditarComponent;
  let fixture: ComponentFixture<ClienteEditarComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: {} },
  } as ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ModalModule],
      providers: [
        ClienteService,
        Router,
        BsModalService,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ],
      declarations: [ClienteEditarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(ClienteEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
