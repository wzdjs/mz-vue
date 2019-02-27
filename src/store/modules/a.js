// 仓库的 a 模块

export default {
  namespaced: true,

  state: {
    name: 'A模块'
  },

  getters: {

  },

  mutations: {
    chgName (state, payLoad) {
      state.name = payLoad.name;
    }
  },

  actions: {

  }
}
