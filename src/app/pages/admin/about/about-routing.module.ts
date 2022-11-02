import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutHomeComponent } from './about-home/about-home.component';
import { AboutSeperateComponent } from './about-seperate/about-seperate.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {
        path: '',
        component: AboutHomeComponent
      },
      {
        path: 'about-home',
        component: AboutHomeComponent
      },
      {
        path: 'about-seperate',
        component: AboutSeperateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
