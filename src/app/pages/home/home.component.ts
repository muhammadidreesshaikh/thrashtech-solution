import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  services: any = [];
  projects: any = [];

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

    this.projects =[
      {
        id: 1,
        image: '../../../assets/img/home/projects.png',
        link: 'https://www.unation.com/',
        name: 'Unation',
      },
      {
        id: 2,
        image: '../../../assets/img/home/projects.png',
        link: 'https://www.mimik.app//',
        name: 'Mimik',
      },
      {
        id: 3,
        image: '../../../assets/img/home/projects.png',
        link: 'https://www.zkteco.com.pk/product_category/70.html',
        name: 'Zkteco',
      },
      {
        id: 4,
        image: '../../../assets/img/home/projects.png',
        link: 'https://www.gamelist.club/',
        name: 'Gamelist',
      }
    ]
  }

}
