import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
    this.projects = [
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
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }
}
