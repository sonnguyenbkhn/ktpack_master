import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTintucDetailsComponent } from './content-tintuc-details.component';

describe('ContentTintucDetailsComponent', () => {
  let component: ContentTintucDetailsComponent;
  let fixture: ComponentFixture<ContentTintucDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTintucDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTintucDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
