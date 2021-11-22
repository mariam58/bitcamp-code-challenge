import { TestBed } from '@angular/core/testing';

import { CountryStatisticService } from './country-statistic.service';

describe('CountryStatisticService', () => {
  let service: CountryStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
