import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProductMainComponent } from './content-product-main.component';

describe('ContentProductMainComponent', () => {
  let component: ContentProductMainComponent;
  let fixture: ComponentFixture<ContentProductMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProductMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProductMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
