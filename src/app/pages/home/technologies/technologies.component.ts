import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from './technologies.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  selectedTab: number = 0;
  data: any = []

  constructor(
    private technologiesService: TechnologiesService
  ) { }

  ngOnInit(): void {
    this.getTechnologiesListing()
  }

  getTechnologiesListing() {
    this.technologiesService.getTechnologies().subscribe(res =>{
      this.data = res;
      console.log(this.data)
    })
  }

  onTabChange(tab: number) {
    this.selectedTab = tab;
  }
}
