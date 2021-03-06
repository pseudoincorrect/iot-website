import { CollapseSidebarService } from './../../@core/utils/collapse-sidebar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  constructor(public collapseSidebarService: CollapseSidebarService) {}

  ngOnInit() {}
}
