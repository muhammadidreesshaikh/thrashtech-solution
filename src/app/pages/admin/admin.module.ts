import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AboutHomeComponent } from './about/about-home/about-home.component';
import { AboutSeperateComponent } from './about/about-seperate/about-seperate.component';
import { ProjectsSeperateComponent } from './projects/projects-seperate/projects-seperate.component';
import { ProjectsHomeComponent } from './projects/projects-home/projects-home.component';
import { ServicesHomeComponent } from './services/services-home/services-home.component';
import { ServicesSeperateComponent } from './services/services-seperate/services-seperate.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AdminComponent,
    AboutHomeComponent,
    AboutSeperateComponent,
    ProjectsSeperateComponent,
    ProjectsHomeComponent,
    ServicesHomeComponent,
    ServicesSeperateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ]
})
export class AdminModule { }
