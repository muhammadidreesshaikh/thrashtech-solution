import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  data: any = {
    image: "../../../assets/img/banner-image/service.jpg",
    heading: 'Services',
    // subHeading: 'Build an engaging app.',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
