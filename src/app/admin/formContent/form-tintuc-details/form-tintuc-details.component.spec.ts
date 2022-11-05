import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTintucDetailsComponent } from './form-tintuc-details.component';

describe('FormTintucDetailsComponent', () => {
  let component: FormTintucDetailsComponent;
  let fixture: ComponentFixture<FormTintucDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTintucDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTintucDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
