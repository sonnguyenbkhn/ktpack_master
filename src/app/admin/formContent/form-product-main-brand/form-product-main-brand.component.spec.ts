import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductMainBrandComponent } from './form-product-main-brand.component';

describe('FormProductMainBrandComponent', () => {
  let component: FormProductMainBrandComponent;
  let fixture: ComponentFixture<FormProductMainBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductMainBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductMainBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
