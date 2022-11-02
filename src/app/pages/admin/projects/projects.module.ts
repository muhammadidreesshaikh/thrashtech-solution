import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
import { ProjectsSeperateComponent } from './projects-seperate/projects-seperate.component';
import { AddEditComponent } from './projects-seperate/add-edit/add-edit.component';
import { ListingComponent } from './projects-seperate/listing/listing.component';


@NgModule({
  declarations: [
    ProjectsComponent, ProjectsHomeComponent, ProjectsSeperateComponent, AddEditComponent, ListingComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
