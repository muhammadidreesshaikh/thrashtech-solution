import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
import { ProjectsSeperateComponent } from './projects-seperate/projects-seperate.component';


@NgModule({
  declarations: [
    ProjectsComponent, ProjectsHomeComponent, ProjectsSeperateComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
