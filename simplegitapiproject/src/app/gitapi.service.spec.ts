import { TestBed } from '@angular/core/testing';

import { GitapiService } from './gitapi.service';

describe('GitapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitapiService = TestBed.get(GitapiService);
    expect(service).toBeTruthy();
  });
});
