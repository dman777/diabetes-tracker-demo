import { TestBed } from '@angular/core/testing';

import { StaggerAnimationService } from './stagger-animation.service';

describe('StaggerAnimationService', () => {
  let service: StaggerAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaggerAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
