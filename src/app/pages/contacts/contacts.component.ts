import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { CollapseSidebarService } from '../../@core/utils';
import { NbToastrService } from '@nebular/theme';

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
    private themeService: NbThemeService,
    private toastrService: NbToastrService
  ) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  showToast(position, status) {
    this.toastrService.show(
      '',
      `Email copied to clipboard`,
      { position, status });
  }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.showToast('top-right', 'success');
  }
}
