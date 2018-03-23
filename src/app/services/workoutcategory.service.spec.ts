import { TestBed, inject } from '@angular/core/testing';

import { WorkoutcategoryService } from './workoutcategory.service';

describe('WorkoutcategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutcategoryService]
    });
  });

  it('should be created', inject([WorkoutcategoryService], (service: WorkoutcategoryService) => {
    expect(service).toBeTruthy();
  }));
});
