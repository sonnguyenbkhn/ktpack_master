import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentGioiThieuComponent } from './content-gioi-thieu.component';

describe('ContentGioiThieuComponent', () => {
  let component: ContentGioiThieuComponent;
  let fixture: ComponentFixture<ContentGioiThieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentGioiThieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentGioiThieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
