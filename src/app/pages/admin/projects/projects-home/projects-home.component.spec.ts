import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsHomeComponent } from './projects-home.component';

describe('ProjectsHomeComponent', () => {
  let component: ProjectsHomeComponent;
  let fixture: ComponentFixture<ProjectsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
