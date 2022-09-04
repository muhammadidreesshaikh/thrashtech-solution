import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSeperateComponent } from './services-seperate.component';

describe('ServicesSeperateComponent', () => {
  let component: ServicesSeperateComponent;
  let fixture: ComponentFixture<ServicesSeperateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesSeperateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesSeperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
