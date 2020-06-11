import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSevenDaysChartComponent } from './last-seven-days-chart.component';

describe('LastSevenDaysChartComponent', () => {
  let component: LastSevenDaysChartComponent;
  let fixture: ComponentFixture<LastSevenDaysChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastSevenDaysChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastSevenDaysChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
