import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTintucMainComponent } from './content-tintuc.component';

describe('ContentTintucComponent', () => {
  let component: ContentTintucMainComponent;
  let fixture: ComponentFixture<ContentTintucMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTintucMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTintucMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
