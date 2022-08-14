import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SlickCarouselModule
  ]
})
export class HomeModule { }
