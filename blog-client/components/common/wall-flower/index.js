 /**
 * @file Wall flower component / ES module
 * @module components/common/wall-flower
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import WallFlowerComponent from './garden'

const wallFlower = {
  install(Vue) {
    Vue.component('WallFlowerBox', WallFlowerComponent)
  }
}

export default wallFlower
