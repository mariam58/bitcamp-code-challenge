import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStatisticComponent } from './country-statistic.component';

describe('CountryStatisticComponent', () => {
  let component: CountryStatisticComponent;
  let fixture: ComponentFixture<CountryStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
