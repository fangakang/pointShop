import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        successModal:{
            show:false,
        }
    },
    getters:{
        successModal:state=>state.successModal
    },
    mutations:{
        showSuccess(state,data){
            state.successModal=data
        }
    },
    actions:{

    }
})
export default store