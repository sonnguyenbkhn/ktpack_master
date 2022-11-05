import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinTucContentComponent } from './tin-tuc-content.component';

describe('TinTucContentComponent', () => {
  let component: TinTucContentComponent;
  let fixture: ComponentFixture<TinTucContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinTucContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinTucContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
