import { TestBed } from '@angular/core/testing';

import { CollapseSidebarService } from './collapse-sidebar.service';

describe('CollapseSidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollapseSidebarService = TestBed.get(CollapseSidebarService);
    expect(service).toBeTruthy();
  });
});
