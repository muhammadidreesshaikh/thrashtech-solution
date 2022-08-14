import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBarComponent } from './company-bar.component';

describe('CompanyBarComponent', () => {
  let component: CompanyBarComponent;
  let fixture: ComponentFixture<CompanyBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
