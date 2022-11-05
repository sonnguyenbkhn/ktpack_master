import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProductDetailsComponent } from './content-product-details.component';

describe('ContentProductDetailsComponent', () => {
  let component: ContentProductDetailsComponent;
  let fixture: ComponentFixture<ContentProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
