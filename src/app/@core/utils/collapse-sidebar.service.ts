import { Injectable } from '@angular/core';
import { NbSidebarService, NbMenuService } from '@nebular/theme';

@Injectable()
export class CollapseSidebarService {
  private isExpanded: Boolean;

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService
  ) {}

  init() {
    this.isExpanded = false;
    this.sidebarService
      .onToggle()
      .subscribe(this.onSidebarToggleValue.bind(this));
    this.menuService.onItemClick().subscribe(this.onMenuItemClick.bind(this));
  }

  onSidebarToggleValue(value: { compact: boolean; tag: string }) {
    this.isExpanded = !this.isExpanded;
  }

  onMenuItemClick(value: { compact: boolean; tag: string }) {
    this.collapseSidebar();
  }

  public collapseSidebar() {
    if (this.isExpanded) {
      this.sidebarService.toggle(true, 'menu-sidebar');
      this.isExpanded = false;
    }
  }
}
