import { TestBed } from '@angular/core/testing';

import { BulletListService } from './bullet-list.service';

describe('BulletListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BulletListService = TestBed.get(BulletListService);
    expect(service).toBeTruthy();
  });
});
