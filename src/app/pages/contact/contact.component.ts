import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  data: any = {
    image: "../../../assets/img/banner-image/contact.jpg",
    heading: 'Contact',
    // subHeading: 'Build an engaging app.',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
