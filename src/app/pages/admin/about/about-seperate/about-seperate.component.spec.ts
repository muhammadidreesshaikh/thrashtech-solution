import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSeperateComponent } from './about-seperate.component';

describe('AboutSeperateComponent', () => {
  let component: AboutSeperateComponent;
  let fixture: ComponentFixture<AboutSeperateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSeperateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSeperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
