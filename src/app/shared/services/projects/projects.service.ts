import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  endpoint: string = 'http://localhost:3000/projects'

  constructor(
    private http: HttpClient
  ) { }

  getProjects() {
    let options = {};

    return this.http.get(this.endpoint, options)
  }
}
