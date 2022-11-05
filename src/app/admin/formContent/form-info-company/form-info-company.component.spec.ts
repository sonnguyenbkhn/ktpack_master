import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfoCompanyComponent } from './form-info-company.component';

describe('FormInfoCompanyComponent', () => {
  let component: FormInfoCompanyComponent;
  let fixture: ComponentFixture<FormInfoCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInfoCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInfoCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
