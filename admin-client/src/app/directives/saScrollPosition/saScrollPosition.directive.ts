/**
 * @file 监听 Dom 滚动指令
 * @module app/directives/scroll-position
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { Directive, Input, Output, EventEmitter, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[saScrollPosition]'
})
export class SaScrollPositionDirective implements OnInit {

  @Input() public maxHeight: number;
  @Output() public scrollChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _isScrolled: boolean;

  public ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const isScrolled = window.scrollY > this.maxHeight;
    if (isScrolled !== this._isScrolled) {
      this._isScrolled = isScrolled;
      this.scrollChange.emit(isScrolled);
    }
  }
}
