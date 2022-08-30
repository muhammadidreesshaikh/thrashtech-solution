import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services/service/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  percent: any = [];
  details: any = [];

  data: any = {
    image: "../../../assets/img/banner-image/service.jpg",
    heading: 'Services',
    // subHeading: 'Build an engaging app.',
  };

  constructor(
    private servicesService: ServicesService
  ) { }

  ngOnInit(): void {

    this.getServicesListing()

    this.percent = [
      {
        id: 1,
        percentage: '23%',
        text: 'INCREASED RESPONSE TIME',
      },
      {
        id: 2,
        percentage: '88%',
        text: 'FASTER DELIVERY TIME',
      },
      {
        id: 3,
        percentage: '97%',
        text: 'CLIENT SATISFACTION INDEX',
      },
      {
        id: 4,
        percentage: '70%',
        text: 'CLIENT RETENTION RATE',
      }
    ]

    // this.details = [
    //   {
    //     id: 1,
    //     title: 'Ideation and evaluation',
    //     text: 'Enterprises are fast adopting technology to improve their productivity, bring efficiency, and remove barriers preventing free and timely flow of information within the enterprise.',
    //     image: '../../../assets/img/extra/img2.jpg',
    //   },
    //   {
    //     id: 2,
    //     title: 'Product design',
    //     text: 'Our products undergo vigorous analysis to craft user-centric, result-driven, and industry-specific designs. We design to enhance user engagement and improve user experience, with intriguing concepts.',
    //     image: '../../../assets/img/extra/img3.jpg',
    //   },
    //   {
    //     id: 3,
    //     title: 'Development',
    //     text: 'We leverage modern technologies and innovative minds to develop dynamic software solutions for multiple platforms, helping clients introduce a one-of-a-kind solution to the audience.',
    //     image: '../../../assets/img/extra/img2.jpg',
    //   },
    //   {
    //     id: 4,
    //     title: 'Testing',
    //     text: 'We take Quality Assurance very seriously. Each project we take on goes through numerous iterations of testing to ensure smooth performance, user-friendliness, and bulletproof security.',
    //     image: '../../../assets/img/extra/img3.jpg',
    //   }
    // ]
  }

  getServicesListing() {
    this.servicesService.getServices().subscribe(res => {
      this.details = res;
      console.log(this.details)
    })
  }
}
