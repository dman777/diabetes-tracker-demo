import { Component, OnInit } from '@angular/core';
import { GetChartDataService } from '../get-chart-data.service';

@Component({
  selector: 'app-last-seven-days-chart',
  templateUrl: './last-seven-days-chart.component.html',
  styleUrls: ['./last-seven-days-chart.component.css']
})

export class LastSevenDaysChartComponent implements OnInit {

  public charts;

  constructor(
    private getChartDataService: GetChartDataService,
  ) {}


  ngOnInit(): void {
    this.charts = this.getChartDataService.getData();
  }

}
