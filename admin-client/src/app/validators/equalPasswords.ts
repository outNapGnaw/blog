/**
 * @file 密码对比验证器
 * @module app/validators/EqualPasswords
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { FormGroup } from '@angular/forms';

export class EqualPasswordsValidator {

  public static validate(firstField, secondField) {

    return (c: FormGroup) => {

      return (c.controls && c.controls[firstField].value === c.controls[secondField].value) ? null : {
        passwordsEqual: {
          valid: false
        }
      };
    };
  }
}
