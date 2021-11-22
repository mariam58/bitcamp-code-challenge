import { TestBed } from '@angular/core/testing';

import { GeneralStatisticService } from './general-statistic.service';

describe('GeneralStatisticService', () => {
  let service: GeneralStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
