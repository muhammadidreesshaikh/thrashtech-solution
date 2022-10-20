import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
