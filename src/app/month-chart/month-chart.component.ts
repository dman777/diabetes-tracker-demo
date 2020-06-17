import { Component, OnInit } from '@angular/core';
import { GetChartDataService } from '../get-chart-data.service';

@Component({
  selector: 'app-month-chart',
  templateUrl: './month-chart.component.html',
  styleUrls: ['./month-chart.component.css']
})
export class MonthChartComponent implements OnInit {

  public charts;

  constructor(
    private getChartDataService: GetChartDataService,
  ) {}

  ngOnInit() {
    this.charts = this.getChartDataService.getData();
  }
}
