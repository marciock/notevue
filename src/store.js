import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
            
        state:{
            users:[],
            error:{error:'',field:'',text:''},
            notes:[]
        },
        mutations:{
            multLogin(state,loginAction){
                state.users=loginAction
            },
            multError(state,loginAction){
                state.users=loginAction
            }

        },
        actions:{
            saveAction: async (context,payload)=>{
                const data=payload.data;
                const url=payload.url

            let result= await Vue.http.post(url,data);

            console.log(result);
                
            },
            loginAction: async ({commit}, payload)=>{
                const schema=payload.schema;
                //const email=payload.email;
                const url=payload.url;

                let result=await Vue.http.post(url,schema);
                console.log(result.data);
                if(result.data.error ===true){
                    await commit('multLogin',result.data);
                }
                else{
                    await commit('multLogin',result.data);
                }
                
            }

        }
    
})