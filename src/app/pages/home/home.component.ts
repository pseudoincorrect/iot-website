import { Component, OnInit } from '@angular/core';
import { CollapseSidebarService } from '../../@core/utils';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public collapseSidebarService: CollapseSidebarService) {}

  ngOnInit() {}
}
