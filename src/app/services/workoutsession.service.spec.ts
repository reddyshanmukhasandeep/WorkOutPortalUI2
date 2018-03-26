import { TestBed, inject } from '@angular/core/testing';

import { WorkoutsessionService } from './workoutsession.service';

describe('WorkoutsessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutsessionService]
    });
  });

  it('should be created', inject([WorkoutsessionService], (service: WorkoutsessionService) => {
    expect(service).toBeTruthy();
  }));
});
