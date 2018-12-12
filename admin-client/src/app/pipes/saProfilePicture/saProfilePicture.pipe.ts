/**
 * @file 图片路径管道符
 * @module app/pipes/profile-picture
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { Pipe, PipeTransform } from '@angular/core';
import { layoutPaths } from 'app/theme';

@Pipe({ name: 'saProfilePicture' })
export class SaProfilePicturePipe implements PipeTransform {

  transform(input: string, ext = 'png'): string {
    return layoutPaths.images.profile + input + '.' + ext;
  }
}
