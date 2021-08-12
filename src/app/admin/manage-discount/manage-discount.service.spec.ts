import { TestBed } from '@angular/core/testing';

import { ManageDiscountService } from './manage-discount.service';

describe('ManageDiscountService', () => {
  let service: ManageDiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageDiscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
