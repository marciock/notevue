<template>
    <div class="container mt-2">
        <div class="row row-left">
            <div class="col-sm-8">
                <form @submit.prevent="save()" >
                <h4>Editando Cadastro de {{users.name}} {{users.lastname}}</h4>
                    <div class="form-group">
                        <label for="name" >Nome</label>
                        <input type="text" id="name"  class="form-control" v-model="users.name">
                    </div>
                    <div class="form-group">
                        <label for="lastname" >Sobrenome</label>
                        <input type="text" id="lastname"  class="form-control" v-model="users.lastname">
                    </div>
                    <div class="form-group">
                        <label for="email" >Email</label>
                        <input type="mail" id="email"  class="form-control" v-model="users.email">
                    </div>
                    <div class="form-group">
                        <label for="password" >Senha</label>
                        <input type="password" id="password"  class="form-control" v-model="senha">
                    </div>
                    <div class="form-group">
                        <label for="confirm" >Repetir Senha</label>
                        <input type="password" id="confirm"  class="form-control" v-model="confirm"  >
                         <small id="emailHelp" class="form-text text-muted" v-if="senha!==confirm">Senhas não conferem </small>
                    </div>
                    <div class="form-group float-right">
                        <router-link to="/dash" class="btn btn-outline-danger">Cancelar</router-link>
                        <button type="submit" class="btn btn-outline-success ml-3" v-if="senha===confirm" >Salvar</button>
                        <button type="submit" class="btn btn-outline-success ml-3" v-else disabled="true">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
     </div>
</template>
<script>

import {mapState} from 'vuex';
import {mapActions} from 'vuex';
export default {
    name:'CadastroEdit',
    data:()=>{
        return{
            senha:'',
            confirm:''
        }
        
    },
    computed:{
        ...mapState(['users'])
    },
    methods:{
        ...mapActions(['editUserAction','updateUserAction']),
        save(){
           
            if(!this.senha ){
                //let newUsers=Object.assign({password:this.senha},this.users)
                
               console.log(this.users.password);
               let data={data:this.users,url:'user_up'};
                this.updateUserAction(data);
                
            }else{
                this.users.password=this.senha;

                console.log(this.users.password)
                 let data={data:this.users,url:'user_up'};
                 this.updateUserAction(data);
            }

            
        },
        edit(){
             const data={id:sessionStorage.getItem('id'),url:'user_edit'};
             this.editUserAction(data)
        }
    },
    created(){
        this.edit();
       
    }

}
</script>