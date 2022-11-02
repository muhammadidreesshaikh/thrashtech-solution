import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesComponent } from './services.component';
import { ServicesHomeComponent } from './services-home/services-home.component';
import { ServicesSeperateComponent } from './services-seperate/services-seperate.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: '',
        component: ServicesHomeComponent
      },
      {
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
export class ServicesRoutingModule { }
