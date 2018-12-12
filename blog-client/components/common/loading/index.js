 /**
 * @file Loading component / ES module
 * @module components/common/loading
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import LoadingComponent from './loading'

const loading = {
  install(Vue) {
    Vue.component(LoadingComponent.name, LoadingComponent)
  }
}

export default loading
