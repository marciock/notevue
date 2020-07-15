import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        users:{},
        notes:[]
    },
    mutations:{
        mutSave(state,saveActions){
            state.users=saveActions;
        }

    },
    actions:{
        saveActions({commit}){
            Vue.http.post('')
        }

    }
})