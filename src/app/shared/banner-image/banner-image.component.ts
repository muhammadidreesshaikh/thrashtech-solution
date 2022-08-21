import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-image',
  templateUrl: './banner-image.component.html',
  styleUrls: ['./banner-image.component.scss']
})
export class BannerImageComponent implements OnInit {

  @Input() item: any = {}

  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }

}
