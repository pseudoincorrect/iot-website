import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Project {
  title: string;
  mainPicture: string;
  summary: string;
  details: string;
  pictures: string[];
  tags: string[];
  location: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  load(): Observable<Project[]> {
    return this.http
      .get<Project[]>('assets/projects_assets/projects-data.json');
  }
}
