import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AboutHomeComponent } from './about/about-home/about-home.component';
import { AboutSeperateComponent } from './about/about-seperate/about-seperate.component';
import { ProjectsHomeComponent } from './projects/projects-home/projects-home.component';
import { ProjectsSeperateComponent } from './projects/projects-seperate/projects-seperate.component';
import { ServicesHomeComponent } from './services/services-home/services-home.component';
import { ServicesSeperateComponent } from './services/services-seperate/services-seperate.component';





const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'about-home',
        component: AboutHomeComponent
      },
      {
        path: 'about-seperate',
        component: AboutSeperateComponent
      },
      {
        path: 'projects-home',
        component: ProjectsHomeComponent
      },
      {
        path: 'projects-seperate',
        component: ProjectsSeperateComponent
      },{
        path: 'services-home',
        component: ServicesHomeComponent
      },
      {
        path: 'services-seperate',
        component: ServicesSeperateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
