import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSeperateComponent } from './projects-seperate.component';

describe('ProjectsSeperateComponent', () => {
  let component: ProjectsSeperateComponent;
  let fixture: ComponentFixture<ProjectsSeperateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsSeperateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsSeperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
