import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';

import { GetChartDataService } from '../get-chart-data.service';

@Component({
  selector: 'app-last-seven-days-chart',
  templateUrl: './last-seven-days-chart.component.html',
  styleUrls: ['./last-seven-days-chart.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class LastSevenDaysChartComponent implements OnInit {

  public charts;

  constructor(
    private getChartDataService: GetChartDataService,
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}

  staggerGraphs(): void {
    console.log(this.el.nativeElement);
    const chartElements = this.el.nativeElement.querySelectorAll('line-chart');
    chartElements.forEach((el) => el.classList.add('.show-chart'));
  }

  ngOnInit(): void {
    this.charts = this.getChartDataService.getData();
    //this.charts.subscribe({ complete: () => { setTimeout(()=> this.staggerGraphs(), 200) }});
  }

}
