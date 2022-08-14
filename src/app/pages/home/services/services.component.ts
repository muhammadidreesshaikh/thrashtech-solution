import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: any = [];

  constructor() { }

  ngOnInit(): void {
    this.services = [
      {
        id: 1,
        image: '../../../assets/img/home/service2.png',
        name: 'Web Apps',
      },
      {
        id: 2,
        image: '../../../assets/img/home/service4.png',
        name: 'Mobile Apps',
      },
      {
        id: 3,
        image: '../../../assets/img/home/service3.png',
        name: 'UI/UX Development',
      },
      {
        id: 4,
        image: '../../../assets/img/home/service5.png',
        name: 'Web Design',
      },
      {
        id: 5,
        image: '../../../assets/img/home/service1.png',
        name: 'Data Analytics',
      },
      {
        id: 6,
        image: '../../../assets/img/home/service6.png',
        name: 'Content Writing',
      }
    ]
  }

}
