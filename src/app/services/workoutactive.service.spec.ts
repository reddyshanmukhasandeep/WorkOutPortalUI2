import { TestBed, inject } from '@angular/core/testing';

import { WorkoutactiveService } from './workoutactive.service';

describe('WorkoutactiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutactiveService]
    });
  });

  it('should be created', inject([WorkoutactiveService], (service: WorkoutactiveService) => {
    expect(service).toBeTruthy();
  }));
});
