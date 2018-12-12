/**
 * @file 服务器管理页面组件
 * @module app/page/linux/component
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'page-linux',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./linux.scss')],
  template: require('./linux.html'),
})
export class LinuxComponent {}
