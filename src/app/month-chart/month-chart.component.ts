import {
  Component,
  OnInit,
} from '@angular/core';
import { GetChartDataService } from '../get-chart-data.service';

@Component({
  selector: 'app-month-chart',
  templateUrl: './month-chart.component.html',
  styleUrls: [
    './month-chart.component.css',
    '../shared-styles.css',
  ],
})

export class MonthChartComponent implements OnInit {
  public charts;
  public activate;

  constructor(
    private getChartDataService: GetChartDataService,
  ) {}

  ngOnInit() {
    this.charts = this.getChartDataService.getData();
    this.charts.subscribe({
      complete: () => {
        // setTimeout to give time for d3 to create graphs
        setTimeout(() => this.activate = true, 50);
      },
    });
  }
}
