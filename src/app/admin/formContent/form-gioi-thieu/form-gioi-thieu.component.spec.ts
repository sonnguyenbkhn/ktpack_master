import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGioiThieuComponent } from './form-gioi-thieu.component';

describe('FormGioiThieuComponent', () => {
  let component: FormGioiThieuComponent;
  let fixture: ComponentFixture<FormGioiThieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGioiThieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGioiThieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
