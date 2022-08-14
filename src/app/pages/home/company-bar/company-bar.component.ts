import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-bar',
  templateUrl: './company-bar.component.html',
  styleUrls: ['./company-bar.component.scss']
})
export class CompanyBarComponent implements OnInit {

  bar: any = [];

  constructor() { }

  ngOnInit(): void {
    this.bar = [
      {
        id: 1,
        icon: 'far fa-check-circle',
        number: '4500',
        name: 'PROJECT COMPLETED',
      },
      {
        id: 2,
        icon: 'fas fa-user-tie',
        number: '30',
        name: 'OUR STAFF',
      },
      {
        id: 3,
        icon: 'fas fa-headset',
        number: '350',
        name: 'SERVICES PROVIDE',
      },
      {
        id: 4,
        icon: 'far fa-smile',
        number: '5300',
        name: 'HAPPY CUSTOMERS',
      },
    ]
  }

}
