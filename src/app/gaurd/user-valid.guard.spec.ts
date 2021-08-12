import { TestBed } from '@angular/core/testing';

import { UserValidGuard } from './user-valid.guard';

describe('UserValidGuard', () => {
  let guard: UserValidGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserValidGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
