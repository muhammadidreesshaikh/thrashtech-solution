import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHomeComponent } from './about-home.component';

describe('AboutHomeComponent', () => {
  let component: AboutHomeComponent;
  let fixture: ComponentFixture<AboutHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
