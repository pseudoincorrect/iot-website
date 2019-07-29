import { CollapseSidebarService } from './@core/utils/collapse-sidebar.service';
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(
    private collapseSidebarService: CollapseSidebarService,
    private analytics: AnalyticsService
  ) {}

  ngOnInit(): void {
    this.collapseSidebarService.init();
    this.analytics.trackPageViews();
  }
}
