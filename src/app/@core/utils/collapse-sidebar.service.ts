import { Injectable } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Injectable()
export class CollapseSidebarService {
  private isExpanded: Boolean;

  constructor(private sidebarService: NbSidebarService) {}

  init() {
    this.isExpanded = false;
    this.sidebarService.onToggle().subscribe(this.onToggleValue.bind(this));
  }

  onToggleValue(value: { compact: boolean; tag: string }) {
    this.isExpanded = !this.isExpanded;
  }

  public collapseSidebar() {
    if (this.isExpanded) {
      this.sidebarService.toggle(true, 'menu-sidebar');
      this.isExpanded = false;
    }
  }
}
