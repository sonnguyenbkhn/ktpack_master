import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMainBrandComponent } from './product-main-brand.component';

describe('ProductMainBrandComponent', () => {
  let component: ProductMainBrandComponent;
  let fixture: ComponentFixture<ProductMainBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMainBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMainBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
