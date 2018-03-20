import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const fetchItem = (id) => {
  return new Promise((resolve, reject) => {
    resolve({name: 'xuxule'})
  })
}

export function createStore () {
  return new Vuex.Store({
    state: {
      items: {}
    },
    actions: {
      fetchItem ({ commit }, id) {
        fetchItem(id).then(item => {
          commit('setItem', {id, item})
        })
      }
    },
    mutations: {
      setItem (state, {id, item}) {
        Vue.set(state.items, id, item)
      }
    }
  })
}