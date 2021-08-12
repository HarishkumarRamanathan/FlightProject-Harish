import { TestBed } from '@angular/core/testing';

import { ManageBookingService } from './manage-bookings.service';

describe('ManageBookingService', () => {
  let service: ManageBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
