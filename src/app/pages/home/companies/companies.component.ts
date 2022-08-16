import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies: any = [];

  constructor() { }

  ngOnInit(): void {
    this.companies = [
      {
        id: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Johnson_and_Johnson_Logo.svg/2560px-Johnson_and_Johnson_Logo.svg.png',
      },
      {
        id: 2,
        image: 'https://logos-world.net/wp-content/uploads/2021/02/Docker-Logo-2015-2017.png',
      },
      {
        id: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png',
      },
      {
        id: 4,
        image: 'https://interviewquery-cms-images.s3-us-west-1.amazonaws.com/b3817df1-8dfb-4d5a-9c8d-32fccfcd1abb.png',
      },
      {
        id: 5,
        image: 'https://clarkfoundationdc.org/wp-content/uploads/2021/07/Medstar-Health-Logo.png',
      },
      {
        id: 6,
        image: 'https://download.logo.wine/logo/Capital_One/Capital_One-Logo.wine.png',
      },
      {
        id: 7,
        image: 'https://image.pitchbook.com/p5AxnTCxTbeoU1kkiguPKsb39r01624389420861_200x200',
      },
      {
        id: 8,
        image: 'https://www.ntara.com/wp-content/uploads/2020/08/survey-monkey-logo-green.png',
      },
      {
        id: 9,
        image: 'https://altc.alt.ac.uk/2016/wp-content/uploads/sites/44/2016/06/Bb_Logo_Black_SCREEN_Reg.png',
      },
      {
        id: 10,
        image: 'https://uploads-ssl.webflow.com/618be68e8d593c6bc80230e9/61b7bfea74fb17ed84015b51_favpng_aarp-illinois-organization-aarp-alabama-state-office.png',
      },
      {
        id: 11,
        image: 'https://decisivmarketplace.com/wp-content/uploads/2020/02/Decisiv_logo.png',
      }
    ]
  }

}


