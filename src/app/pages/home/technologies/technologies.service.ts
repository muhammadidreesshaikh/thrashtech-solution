import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  endpoint: string = environment.baseurl + '' + 'technologies'

  constructor(
    private http: HttpClient
  ) { }

  getTechnologies() {
    let options = {};
    // console.log(this.endpoint);
    
    return this.http.get(this.endpoint, options)
  }
}
