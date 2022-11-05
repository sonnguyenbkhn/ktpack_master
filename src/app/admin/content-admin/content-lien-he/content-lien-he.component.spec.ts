import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLienHeComponent } from './content-lien-he.component';

describe('ContentLienHeComponent', () => {
  let component: ContentLienHeComponent;
  let fixture: ComponentFixture<ContentLienHeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentLienHeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLienHeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
