import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTrangChuComponent } from './content-trang-chu.component';

describe('ContentTrangChuComponent', () => {
  let component: ContentTrangChuComponent;
  let fixture: ComponentFixture<ContentTrangChuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTrangChuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTrangChuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
