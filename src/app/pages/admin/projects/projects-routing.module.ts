import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
import { ProjectsSeperateComponent } from './projects-seperate/projects-seperate.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: '',
        component: ProjectsHomeComponent
      },
      {
        path: 'projects-home',
        component: ProjectsHomeComponent
      },
      {
        path: 'projects-seperate',
        component: ProjectsSeperateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
