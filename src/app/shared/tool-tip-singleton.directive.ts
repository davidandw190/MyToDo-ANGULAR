import { Directive, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { createSingleton } from 'tippy.js';
import { ToolTipDirective } from './tool-tip.directive';

@Directive({
  selector: '[appToolTipSingleton]'
})
export class ToolTipSingletonDirective implements AfterViewInit {
  get elementsWithTooltips(): QueryList<ToolTipDirective> {
    return this._elementsWithTooltips;
  }

  set elementsWithTooltips(value: QueryList<ToolTipDirective>) {
    this._elementsWithTooltips = value;
  }

  // @ts-ignore
  @ContentChildren(ToolTipDirective, { descendants: true }) private _elementsWithTooltips: QueryList<ToolTipDirective>

  singletonInstance: any;

  constructor() { }

  ngAfterViewInit() {
    this.singletonInstance = createSingleton(this.getTippyInstances(), {
      delay: [200, 0],
      moveTransition: 'transform 0.2s ease-out'
    })

    this._elementsWithTooltips.changes.subscribe(() => {
      this.singletonInstance.setInstances(this.getTippyInstances())
    })
  }

  getTippyInstances() {
    return this._elementsWithTooltips
      .toArray()
      .map(t => t.tippyInstance)
  }

}
