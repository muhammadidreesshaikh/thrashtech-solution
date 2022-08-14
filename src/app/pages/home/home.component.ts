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
  selectedTab: number = 0;
  bar: any = [];

  tabs: any = ["Mobile", "Front End", "Databases", "Backend", "CMS", "Infra & DevOps"];

  mobiles: any = [
    { name: 'IOS', image: '../../../assets/img/home/technology1.png' },
    { name: 'Android', image: '../../../assets/img/home/technology2.png' },
    { name: 'React Native', image: '../../../assets/img/home/technology3.png' },
    { name: 'Flutter', image: '../../../assets/img/home/technology4.png' },
    { name: 'Ionic', image: '../../../assets/img/home/technology5.png' },
    { name: 'Swift', image: '../../../assets/img/home/technology6.png' }
  ]

  frontends: any = [
    { name: 'Angular', image: '../../../assets/img/home/technology7.png' },
    { name: 'React Js', image: '../../../assets/img/home/technology3.png' },
    { name: 'TypeScript', image: '../../../assets/img/home/technology8.png' },
    { name: 'Vue', image: '../../../assets/img/home/technology9.png' },
    { name: 'Javastrip', image: '../../../assets/img/home/technology10.png' },
    { name: 'HTML5', image: '../../../assets/img/home/technology11.png' },
    { name: 'Sass', image: '../../../assets/img/home/technology12.png' },
    { name: 'Bootstrap', image: '../../../assets/img/home/technology13.png' },
    { name: 'Css3', image: '../../../assets/img/home/technology14.png' }
  ]

  databases: any = [
    { name: 'Mongo DB', image: '../../../assets/img/home/technology15.png' },
    { name: 'MySQL', image: '../../../assets/img/home/technology16.png' },
    { name: 'MsSQL', image: '../../../assets/img/home/technology17.png' },
    { name: 'Firebase', image: '../../../assets/img/home/technology18.png' },
    { name: 'DynamoDB', image: '../../../assets/img/home/technology19.png' }
  ]

  backend: any = [
    { name: 'PHP', image: '../../../assets/img/home/technology20.png' },
    { name: 'Ruby Rails', image: '../../../assets/img/home/technology21.png' },
    { name: 'Java', image: '../../../assets/img/home/technology22.png' },
    { name: 'Node .JS', image: '../../../assets/img/home/technology23.png' }
  ]

  cms: any = [
    { name: 'Wordpress', image: '../../../assets/img/home/technology24.png' },
    { name: 'Magento', image: '../../../assets/img/home/technology25.png' },
    { name: 'Shopify', image: '../../../assets/img/home/technology26.png' }
  ]

  infradevOps: any = [
    { name: 'AWS', image: '../../../assets/img/home/technology27.png' },
    { name: 'Appium', image: '../../../assets/img/home/technology28.png' },
    { name: 'Digital ocean', image: '../../../assets/img/home/technology29.png' },
    { name: 'Azure', image: '../../../assets/img/home/technology30.png' },
    { name: 'Gradle', image: '../../../assets/img/home/technology31.png' }
  ]


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

  onTabChange(tab: number) {
    this.selectedTab = tab;
  }

}
