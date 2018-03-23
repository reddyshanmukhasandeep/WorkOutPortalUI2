import { TestBed, inject } from '@angular/core/testing';

import { UrlproviderService } from './urlprovider.service';

describe('UrlproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlproviderService]
    });
  });

  it('should be created', inject([UrlproviderService], (service: UrlproviderService) => {
    expect(service).toBeTruthy();
  }));
});
