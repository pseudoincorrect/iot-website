import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content
          select="router-outlet"
          ng-click="collapseSidebar()"
        ></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `
})
export class OneColumnLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('on init');
  }

  collapseSidebar() {
    console.log('button clicked');
    // this.nbSidebarService.collapse();
  }
}
