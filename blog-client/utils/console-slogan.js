/**
 * @file console.solgan / ES module
 * @module utils/console-slogan
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { isBrowser, isProdMode } from '~/environment'

export default () => {
  if (isBrowser && isProdMode) {
    console.clear()
    console.log('%cTalk is cheap. Show me the code %cwangpeyton@gmail.com', 'color:#666;font-size:3em;', 'color:#666;font-size:13px;')
  }
}
