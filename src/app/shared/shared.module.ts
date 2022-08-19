import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { BannerImageComponent } from './banner-image/banner-image.component';



@NgModule({
  declarations: [
    SliderComponent,
    BannerImageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SliderComponent,
    BannerImageComponent
  ],
})
export class SharedModule { }
