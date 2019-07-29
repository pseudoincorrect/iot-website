import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { CollapseSidebarService } from '../../@core/utils';

@Component({
  selector: 'ngx-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.scss']
})
export class LeisureComponent implements OnInit {
  JSON: any;
  currentTheme: string;
  themeSubscription: any;

  ngOnInit() {}

  constructor(
    public collapseSidebarService: CollapseSidebarService,
    private themeService: NbThemeService
  ) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
    this.JSON = JSON;
  }
}
