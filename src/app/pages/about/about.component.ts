import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  data: any = {
    image: "../../../assets/img/banner-image/about1.jpg",
    heading: 'About',
    // subHeading: 'Build an engaging app.',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
