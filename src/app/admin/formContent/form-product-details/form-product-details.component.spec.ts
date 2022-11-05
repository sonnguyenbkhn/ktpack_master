import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductDetailsComponent } from './form-product-details.component';

describe('FormProductDetailsComponent', () => {
  let component: FormProductDetailsComponent;
  let fixture: ComponentFixture<FormProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
