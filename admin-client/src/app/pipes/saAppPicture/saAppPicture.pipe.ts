/**
 * @file 获取图片管道符
 * @module app/pipes/app-picture
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { Pipe, PipeTransform } from '@angular/core';
import { layoutPaths } from 'app/theme';

@Pipe({ name: 'saAppPicture' })
export class SaAppPicturePipe implements PipeTransform {

  transform(input: string): string {
    return layoutPaths.images.root + input;
  }
}
