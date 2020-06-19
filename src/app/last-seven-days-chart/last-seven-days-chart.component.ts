import {
  Component,
  OnInit,
} from '@angular/core';

import { GetChartDataService } from '../get-chart-data.service';

@Component({
  selector: 'app-last-seven-days-chart',
  templateUrl: './last-seven-days-chart.component.html',
  styleUrls: [
    './last-seven-days-chart.component.css',
    '../shared-styles.css',
  ],
})

export class LastSevenDaysChartComponent implements OnInit {
  public charts;
  public activate;

  constructor(
    private getChartDataService: GetChartDataService,
  ) {}

  ngOnInit(): void {
    this.charts = this.getChartDataService.getData();
    this.charts.subscribe({
      complete: () => {
        // setTimeout to give time for d3 to create graphs
        setTimeout(() => this.activate = true, 50);
      },
    });
  }

}
