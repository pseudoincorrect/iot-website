import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Project {
  title: string;
  mainPictures: string[];
  summary: string;
  details: string;
  pictures: string[];
  tags: string[];
  location: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  load(): Observable<{ projects: Project[] }> {
    return this.http.get<{ projects: Project[] }>(
      'assets/projects_assets/projects-data.json'
    );
  }
}
