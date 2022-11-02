import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  endpoint: string = environment.baseurl + '' + 'projects'

  constructor(
    private http: HttpClient
  ) { }

  getProjects() {
    let options = {};

    return this.http.get(this.endpoint, options)
  }

  createUser() {
    
  }
}
