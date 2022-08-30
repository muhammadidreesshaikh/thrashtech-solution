import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/shared/services/projects/projects.service';

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
          dots: false,
          "autoplay": true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          "autoplay": true,
        }
      }
    ]
  };

  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.getProjectsListing()
  }

  getProjectsListing() {
    this.projectsService.getProjects().subscribe(res =>{
      this.projects = res;
      console.log(this.projects)
    })
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }
}
