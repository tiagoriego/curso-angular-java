import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeaderComponent } from './custom-header.component';
import { BootstrapModule } from 'src/app/modules/bootstrap/bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CustomHeaderComponent', () => {
  let component: CustomHeaderComponent;
  let fixture: ComponentFixture<CustomHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BootstrapModule, BrowserAnimationsModule],
      declarations: [CustomHeaderComponent]
    });
    fixture = TestBed.createComponent(CustomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
