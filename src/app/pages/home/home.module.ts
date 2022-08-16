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
import { TechnologiesComponent } from './technologies/technologies.component';
import { CompanyBarComponent } from './company-bar/company-bar.component';
import { BuildComponent } from './build/build.component';
import { CompaniesComponent } from './companies/companies.component';
import { CommunitiesComponent } from './communities/communities.component';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent,
    TechnologiesComponent,
    CompanyBarComponent,
    BuildComponent,
    CompaniesComponent,
    CommunitiesComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SlickCarouselModule
  ]
})
export class HomeModule { }
