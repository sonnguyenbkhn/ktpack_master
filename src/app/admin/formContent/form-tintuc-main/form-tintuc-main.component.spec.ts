import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTintucMainComponent } from './form-tintuc.component';

describe('FormTintucComponent', () => {
  let component: FormTintucMainComponent;
  let fixture: ComponentFixture<FormTintucMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTintucMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTintucMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
