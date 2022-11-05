import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTrangChuComponent } from './form-trang-chu.component';

describe('FormTrangChuComponent', () => {
  let component: FormTrangChuComponent;
  let fixture: ComponentFixture<FormTrangChuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTrangChuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTrangChuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
