/**
 * @file Demo Layout 表单演示页面
 * @module app/page/demo/component/forms/layout
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'page-layouts',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: require('./layouts.html'),
})
export class LayoutsComponent {

  public picture = 'assets/img/theme/no-photo.png';

  constructor() {}
}
