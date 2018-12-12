/**
 * @file Comment box component / ES module
 * @module components/common/comment
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import VueComment from './comment'

const comment = {
  install(Vue) {
    Vue.component('comment-box', VueComment)
  }
}

export default comment
