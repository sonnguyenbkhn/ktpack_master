import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductMainComponent } from './form-product-main.component';

describe('FormProductMainComponent', () => {
  let component: FormProductMainComponent;
  let fixture: ComponentFixture<FormProductMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
