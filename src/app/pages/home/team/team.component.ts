import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team: any = [];

  constructor() { }

  ngOnInit(): void {
    this.team = [
      {
        id: 1,
        image: '../../../../assets/img/home/team/1.PNG',
        name: 'Awais Shaikh',
        text: 'Full Stack Developer',
      },
      {
        id: 2,
        image: '../../../../assets/img/home/team/2.PNG',
        name: 'Idrees Shaikh',
        text: 'Sr. UI/UX Developer',
      },
      {
        id: 3,
        image: '../../../../assets/img/home/team/3.PNG',
        name: 'Ilyas Ahmed',
        text: 'Software Engineer',
      },
      {
        id: 4,
        image: '../../../../assets/img/home/team/4.PNG',
        name: 'Anis Shaikh',
        text: 'Front-End Developer',
      }
    ]
  }

}
