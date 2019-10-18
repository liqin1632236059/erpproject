import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //取
  getters:{
    getUsers(state){
      return state.users;
    },
    getToken(state){
      return state.token;
    }
  },
  state: {
    users:{username:"admin",userpwd:"123"},
    token:""
  },
  //同步设置
  mutations: {
    setUsers(state,val){
      state.users=val;
    }, 
    setToken(state,val){
      state.token=val;
    },
  },
  //异步设置
  actions: {

  }
})
