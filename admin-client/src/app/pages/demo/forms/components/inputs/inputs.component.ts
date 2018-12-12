/**
 * @file Demo Input 表单演示页面
 * @module app/page/demo/component/forms/input
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'page-inputs',
  encapsulation: ViewEncapsulation.None,
  template: require('./inputs.html'),
})
export class InputsComponent {

  constructor() {}
}
