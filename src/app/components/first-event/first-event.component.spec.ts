import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstEventComponent } from './first-event.component';

describe('FirstEventComponent', () => {
  let component: FirstEventComponent;
  let fixture: ComponentFixture<FirstEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstEventComponent]
    });
    fixture = TestBed.createComponent(FirstEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
