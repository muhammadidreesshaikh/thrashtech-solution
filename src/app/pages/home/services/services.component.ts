import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services/service/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: any = [];

  constructor(
    private servicesService:  ServicesService
  ) { }

  ngOnInit(): void {
    this.getServiceListing()
  }

  getServiceListing() {
    this.servicesService.getServices().subscribe(res =>{
      this.services = res;
      console.log(this.services);
    })
  }

}
