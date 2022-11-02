import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutHomeComponent } from './about-home/about-home.component';
import { AboutSeperateComponent } from './about-seperate/about-seperate.component';


@NgModule({
  declarations: [
    AboutComponent, AboutHomeComponent, AboutSeperateComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
