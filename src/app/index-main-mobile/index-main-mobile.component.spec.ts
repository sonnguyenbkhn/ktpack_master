import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMainMobileComponent } from './index-main-mobile.component';

describe('IndexMainMobileComponent', () => {
  let component: IndexMainMobileComponent;
  let fixture: ComponentFixture<IndexMainMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexMainMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMainMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
