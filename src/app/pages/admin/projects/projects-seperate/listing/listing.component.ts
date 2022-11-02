import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/shared/services/projects/projects.service';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  listing: any = []; 

  constructor(
    private projectsServices: ProjectsService
  ) { }

  ngOnInit(): void {
    this.getProjectListing()
  }

  getProjectListing() {
    this.projectsServices.getProjects().subscribe(res => {
      this.listing = res;
      console.log(this.listing);
      
    })
  }

}
