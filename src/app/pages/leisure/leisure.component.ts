import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.scss'],
})
export class LeisureComponent implements OnInit {

  JSON: any;
  currentTheme: string;
  themeSubscription: any;

  ngOnInit() {
  }

  constructor( private themeService: NbThemeService ) {
    this.themeSubscription = this.themeService.getJsTheme()
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
    this.JSON = JSON;
  }

}
