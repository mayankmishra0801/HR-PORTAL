import { TestBed } from '@angular/core/testing';

// import { HeroService } from './hero.service';

import { HeroService } from './server/hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
