import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProductMainBrandComponent } from './content-product-main-brand.component';

describe('ContentProductMainBrandComponent', () => {
  let component: ContentProductMainBrandComponent;
  let fixture: ComponentFixture<ContentProductMainBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProductMainBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProductMainBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
