import {
  Directive,
  ElementRef,
  Input,
} from '@angular/core';

@Directive({
  selector: '[staggerAnimation]'
})
export class StaggerAnimationDirective {
  private _activate: boolean;

  constructor(
    private el: ElementRef,
  ) { }

  // d3.js creates it's own nodes that angular can not keep track of state. So,
  // angular animation will not be effective on graphs. This is the reason
  // for this directive
  staggerGraphs(): void {
    const chartElements = this.el.nativeElement.querySelectorAll('line-chart');
    chartElements.forEach((el, i) => {
      setTimeout(() => { el.classList.add('show-chart') }, (i * 120) );
    });
  }

  @Input('staggerAnimation') set activate(value: boolean) {
    if (!value) { return; }

    this._activate = value;
    this.staggerGraphs();
  }

  get activate(): boolean {
    return this._activate;
  }

}
