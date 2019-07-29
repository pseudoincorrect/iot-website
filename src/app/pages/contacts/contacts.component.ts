import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { CollapseSidebarService } from '../../@core/utils';

@Component({
  selector: 'ngx-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {
  currentTheme: string;
  themeSubscription: any;

  constructor(
    public collapseSidebarService: CollapseSidebarService,
    private themeService: NbThemeService
  ) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
