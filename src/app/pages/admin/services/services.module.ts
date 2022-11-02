import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { ServicesHomeComponent } from './services-home/services-home.component';
import { ServicesSeperateComponent } from './services-seperate/services-seperate.component';


@NgModule({
  declarations: [
    ServicesComponent, ServicesHomeComponent, ServicesSeperateComponent,
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
