import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesHomeComponent } from './services-home.component';

describe('ServicesHomeComponent', () => {
  let component: ServicesHomeComponent;
  let fixture: ComponentFixture<ServicesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
