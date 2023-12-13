import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstModelComponent } from './first-model.component';

describe('FirstModelComponent', () => {
  let component: FirstModelComponent;
  let fixture: ComponentFixture<FirstModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstModelComponent]
    });
    fixture = TestBed.createComponent(FirstModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
