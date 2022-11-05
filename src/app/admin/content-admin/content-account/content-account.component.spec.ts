import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAccountComponent } from './content-account.component';

describe('ContentAccountComponent', () => {
  let component: ContentAccountComponent;
  let fixture: ComponentFixture<ContentAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
