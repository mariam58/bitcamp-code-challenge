import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStatisticComponent } from './general-statistic.component';

describe('GeneralStatisticComponent', () => {
  let component: GeneralStatisticComponent;
  let fixture: ComponentFixture<GeneralStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
