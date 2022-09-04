import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
environment

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  endpoint: string = environment.baseurl + '' + 'services';

  constructor(
    private http: HttpClient
  ) { }

  getServices() {
    let options = {};

    return this.http.get(this.endpoint, options);
  }

}
