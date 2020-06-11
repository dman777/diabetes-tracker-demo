import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { LineChartService } from './line-chart.service';
import * as d3 from 'd3';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent {
  @Input()
  curveData: Array<object>;
  graphSize: String;

  constructor(
    private lineChartService: LineChartService,
    private elRef: ElementRef
  ) { }

  ngAfterViewInit() {
    this.lineChartService.makeGraph(this.curveData, this.elRef.nativeElement);
  }
}
