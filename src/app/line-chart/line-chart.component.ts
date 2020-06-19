import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { LineChartService } from './line-chart.service';
import { animate, trigger, transition, style, query, state } from '@angular/animations';


@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})

export class LineChartComponent {
  @Input('curve-data') curveData: Array<object>;
  @Input('graph-size') graphSize: String;


  constructor(
    private lineChartService: LineChartService,
    private elRef: ElementRef,
  ) { }

  ngAfterViewInit() {

    this.lineChartService.makeGraph(
      this.curveData,
      this.elRef.nativeElement.querySelector('.graph-sheet'),
      this.graphSize,
    );
  }
}
