import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss']
})
export class CommunitiesComponent implements OnInit {

  communities: any = [];

  constructor() { }

  ngOnInit(): void {
    this.communities = [
      {
        id: 1,
        image: '../../../../assets/img/home/communities1.png',
        name : 'Google developer',
      },
      {
        id: 2,
        image: '../../../../assets/img/home/communities2.png',
        name : 'Adobe Solution',
      },
      {
        id: 3,
        image: '../../../../assets/img/home/communities3.png',
        name : 'Microsoft',
      },
      {
        id: 4,
        image: '../../../../assets/img/home/communities4.png',
        name : 'Amazon',
      }
      
    ]
  }

}
