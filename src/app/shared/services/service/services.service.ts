import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  endpoint: string = 'http://localhost:3000/services';

  constructor(
    private http: HttpClient
  ) { }

  getServices() {
    let options = {};

    return this.http.get(this.endpoint, options);
  }

}
