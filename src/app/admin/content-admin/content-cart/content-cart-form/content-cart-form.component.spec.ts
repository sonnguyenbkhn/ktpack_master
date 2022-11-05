import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCartFormComponent } from './content-cart-form.component';

describe('ContentCartFormComponent', () => {
  let component: ContentCartFormComponent;
  let fixture: ComponentFixture<ContentCartFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCartFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
