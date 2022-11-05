import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMainChildComponent } from './footer-main-child.component';

describe('FooterMainChildComponent', () => {
  let component: FooterMainChildComponent;
  let fixture: ComponentFixture<FooterMainChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMainChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMainChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
