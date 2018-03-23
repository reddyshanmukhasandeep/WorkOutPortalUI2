import { TestBed, inject } from '@angular/core/testing';

import { WorkoutcollectionsService } from './workoutcollections.service';

describe('WorkoutcollectionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutcollectionsService]
    });
  });

  it('should be created', inject([WorkoutcollectionsService], (service: WorkoutcollectionsService) => {
    expect(service).toBeTruthy();
  }));
});
