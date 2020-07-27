import Vue from 'vue';
import Vuex from 'vuex';
import routes from './routes';
Vue.use(Vuex);

export default new Vuex.Store({
            
        state:{
            users:{error:true,field:'',text:''},
            notes:[],
            idNote:{},
            note:{}
        },
        mutations:{
            mutLogin(state,loginAction){
                state.users=loginAction
            },
            mutRefresh(state,refreshAction){
                state.users=refreshAction
            },
            mutShowNoteUser(state,showNotes){
                state.notes=showNotes
            },
           mutEditUser(state,editUserAction){
               state.users=editUserAction
           },
           mutEditNote(state,editNoteAction){
            state.note=editNoteAction
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
                  // sessionStorage.setItem('password',result.data.password);


                   routes.push('/dash').catch(()=>{})
                }else{
                    commit('mutLogin',result.data);
                }
                      
         

            } ,
            refreshAction({commit}){
                let user={error:true,field:'',text:''};
                return commit('mutRefresh',user);
            },
            clear: async()=>{
                sessionStorage.clear();
                console.log('saiu')
               
               // let user={error:true,field:'',text:''};
               //  commit('mutRefresh',user);
                await routes.push('/').catch(()=>{})
            },
            showNotes: async ({commit})=>{
                    let user=sessionStorage.getItem('id');
                    let show=await Vue.http.get('show_notes_user',{params:{user}});
                  //  console.log(show.body);
                    commit('mutShowNoteUser',show.body);


            },
            editUserAction: async ({commit},payload)=>{
                const id=payload.id;
                const url=payload.url;

                const result=await Vue.http.get(url,{params:{id}})
                commit('mutEditUser',result.body);

            },
            updateUserAction:async (context,payload)=>{
                const data=payload.data;
                const url=payload.url;
                
                  sessionStorage.clear();
                let result= await Vue.http.post(url,data);
                console.log(result.data)
                sessionStorage.setItem('id',result.data.id);
                sessionStorage.setItem('name',result.data.name);
                sessionStorage.setItem('lastname',result.data.lastname);
                sessionStorage.setItem('email',result.data.email);
               // sessionStorage.setItem('password',result.data.password);


                routes.push('/dash').catch(()=>{})

            },
            delNoteActions(context,payload){
                const id=payload.id;
                //const url=payload.url;
                 Vue.http.get('note_del',{params:{id}}).then(res=>{
                     console.log(res)
                 });

                
                
            },
            editNoteActions: async ({commit},payload)=>{
                const id= await payload.id;
                

                const result=await Vue.http.get('note_edit',{params:{id}})
                commit('mutEditNote',result.data);

                //console.log(result.data)
            },
            updateNoteActions:async (context,payload)=>{

                const data= await payload;
                const result= await Vue.http.post('note_up',data);

                return result;
            }

                
            
        }
       
    
})