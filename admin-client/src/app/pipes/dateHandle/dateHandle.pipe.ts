/**
 * @file 时间本地化处理管道符
 * @module app/pipes/date-handle
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dataToLocale' })
export class DataToLocalePipe implements PipeTransform {

  transform(input: any): string {
    return new Date(input).toLocaleString();
  }
}
