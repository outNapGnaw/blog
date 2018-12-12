/**
 * @file Filters / ES module
 * @module filters/index
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { textOverflow, firstUpperCase } from './html-filter.js'
import { timeAgo, toYMD, toLocalString } from './time-filter.js'

export default {
  textOverflow,
  firstUpperCase,
  timeAgo,
  toYMD,
  toLocalString
}
