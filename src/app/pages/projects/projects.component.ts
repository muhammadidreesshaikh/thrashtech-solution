import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/shared/services/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  data: any = {
    image: "../../../assets/img/banner-image/project.jpg",
    heading: 'Projects',
    // subHeading: 'Build an engaging app.',
  };
  
  projects: any = []

  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.getPorjectsListing()
  }

  getPorjectsListing() {
    this.projectsService.getProjects().subscribe(res => {
      this.projects = res;
      console.log(this.projects)
    }) 
  }

}
