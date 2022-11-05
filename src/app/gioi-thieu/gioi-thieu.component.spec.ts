import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GioiThieuComponent } from './gioi-thieu.component';

describe('GioiThieuComponent', () => {
  let component: GioiThieuComponent;
  let fixture: ComponentFixture<GioiThieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GioiThieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GioiThieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
