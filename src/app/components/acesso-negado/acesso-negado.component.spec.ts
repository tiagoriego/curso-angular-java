import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoNegadoComponent } from './acesso-negado.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AcessoNegadoComponent', () => {
  let component: AcessoNegadoComponent;
  let fixture: ComponentFixture<AcessoNegadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcessoNegadoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(AcessoNegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
