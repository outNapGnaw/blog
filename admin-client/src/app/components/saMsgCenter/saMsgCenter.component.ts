/**
 * @file 消息中心组件
 * @module app/component/markdownn-editor
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { Component } from '@angular/core';
import { SaMsgCenterService } from './saMsgCenter.service';

@Component({
  selector: 'sa-msg-center',
  providers: [SaMsgCenterService],
  styles: [require('./saMsgCenter.scss')],
  template: require('./saMsgCenter.html')
})
export class SaMsgCenterComponent {

  public messages: Array<Object>;
  public notifications: Array<Object>;

  constructor(private _saMsgCenterService: SaMsgCenterService) {
    this.messages = this._saMsgCenterService.getMessages();
    this.notifications = this._saMsgCenterService.getNotifications();
  }
}
