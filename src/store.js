import Vue from 'vue';
import Vuex from 'vuex';
import routes from './routes';
Vue.use(Vuex);

export default new Vuex.Store({
            
        state:{
            users:{error:true,field:'',text:''},
            
            notes:[]
        },
        mutations:{
            mutLogin(state,loginAction){
                state.users=loginAction
            },
            mutRefresh(state,refreshAction){
                state.users=refreshAction
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
                
                const url=payload.url;
       

               let result= await Vue.http.post(url,schema);
                
               if(result.data.error===false){
                   // commit('mutLogin',result.data);
                    
                   sessionStorage.setItem('id',result.data.id);
                   sessionStorage.setItem('name',result.data.name);
                   sessionStorage.setItem('lastname',result.data.lastname);
                   sessionStorage.setItem('email',result.data.email);
                   sessionStorage.setItem('password',result.data.password);


                   routes.push('/dash').catch(()=>{})
                }else{
                    commit('mutLogin',result.data);
                }
                      
                   
            

            } ,
            refreshAction({commit}){
                let user={error:true,field:'',text:''};
                return commit('mutRefresh',user);
            }

                
            
        }
       
    
})