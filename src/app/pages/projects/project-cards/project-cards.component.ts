import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService, Project } from '../project-service/project.service';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss'],
})
export class ProjectCardsComponent implements OnInit, OnDestroy {

  projects: Project[];
  JSON: any;
  currentTheme: string;
  themeSubscription: any;

  constructor(private projectService: ProjectService,
              private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
    this.JSON = JSON;
  }

  ngOnInit() {
    this.projectService.load()
      .subscribe( projects => {
        this.projects = projects;
      } );
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
