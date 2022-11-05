import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInfoCompanyComponent } from './content-info-company.component';

describe('ContentInfoCompanyComponent', () => {
  let component: ContentInfoCompanyComponent;
  let fixture: ComponentFixture<ContentInfoCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentInfoCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInfoCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
