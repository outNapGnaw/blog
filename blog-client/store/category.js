/**
 * @file 分类数据状态 / ES module
 * @module store/category
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

export const state = () => {
  return {
    fetching: false,
    data: { data: [] }
  }
}

export const mutations = {
  REQUEST_LIST(state) {
    state.fetching = true
  },
  GET_LIST_SUCCESS(state, action) {
    state.fetching = false
    state.data = action.result
  },
  GET_LIST_FAILURE(state) {
    state.fetching = false
    state.data = { data: [] }
  }
}
