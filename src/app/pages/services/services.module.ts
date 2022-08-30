import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class ServicesModule { }
