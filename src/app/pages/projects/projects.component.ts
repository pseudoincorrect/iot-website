import { Component, OnInit } from '@angular/core';
import { CollapseSidebarService } from '../../@core/utils';

@Component({
  selector: 'ngx-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor(public collapseSidebarService: CollapseSidebarService) {}

  ngOnInit() {}
}
