import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLienheComponent } from './form-lienhe.component';

describe('FormLienheComponent', () => {
  let component: FormLienheComponent;
  let fixture: ComponentFixture<FormLienheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLienheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLienheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
