/**
 * @file Empty box component / ES module
 * @module components/common/empty
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import EmptyComponent from './empty'

const empty = {
  install(Vue) {
    Vue.component(EmptyComponent.name, EmptyComponent)
  }
}

export default empty
