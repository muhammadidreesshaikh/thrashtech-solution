import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  services: any = [];
  projects: any = [];
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "arrows" :false,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  selectedTab: string = 'tab1';
  bar: any = [];

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
        image: '../../../assets/img/home/project1.jpg',
        link: 'https://www.unation.com/',
        name: 'Unation',
      },
      {
        id: 2,
        image: '../../../assets/img/home/project2.jpg',
        link: 'https://www.mimik.app//',
        name: 'Mimik',
      },
      {
        id: 3,
        image: '../../../assets/img/home/project3.jpg',
        link: 'https://www.zkteco.com.pk/product_category/70.html',
        name: 'Zkteco',
      },
      {
        id: 4,
        image: '../../../assets/img/home/project5.jpg',
        link: 'https://www.gamelist.club/',
        name: 'Gamelist',
      },
      {
        id: 5,
        image: '../../../assets/img/home/project1.jpg',
        link: 'https://www.unation.com/',
        name: 'Unation',
      },
      {
        id: 6,
        image: '../../../assets/img/home/project2.jpg',
        link: 'https://www.mimik.app//',
        name: 'Mimik',
      },
    ]

    this.bar =[
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

  slickInit(e: any) {
    console.log('slick initialized');
  }

  onTabChange(tab: string) {
    this.selectedTab = tab;
  }

}
