<template>

    <div>
        <form @submit.prevent="entrar()">
       <div class="row mt-5">
           <div class="col-sm-8">
            <div class="card shadow p-3 mb-5 bg-white rounded" >
                <div class="card-body">
                    <h5 class="card-title ">Login</h5>
                    <div class=" card-subtitle">
                        <div class="form-group ">
                            <label for="email">Email</label>
                            <input type="mail" id="email"  class="form-control" v-model="schema.email" aria-describedby="emailHelp">
                            <small id="emailHelp" class="form-text text-muted" v-if="this.users.field==='email'">{{this.users.text}}</small>
                           
                        </div>
                        <div class="form-group">
                            <label for="password">senha</label>
                            <input type="password" id="password"  class="form-control" v-model="schema.password" aria-describedby="passwordHelp">
                            <small id="passwordHelp" class="form-text text-muted" v-if="this.users.field==='password'">{{this.users.text}}</small>
                        </div>
                    </div>
                    <div class="form-group float-right">
                        <router-link to="/cadastro" class="card-link">Cadastrar</router-link>
                        <button type="submit" class="btn btn-outline-success ml-3"  >Entrar</button>
                    </div>
                </div>
            </div>
           </div>
           
       </div>
        </form>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import {mapActions} from 'vuex';


export default {
    name:'Login',
    data:()=>{
        return{
            schema:{
                email:'',
                password:''
            }
        }
    },
    computed:{
        ...mapState(['users']),
    },
    methods:{
        ...mapActions(['loginAction','refreshAction']),
        
        
        entrar(){
           this.loginAction({schema:this.schema,url:'login'});

              // console.log(this.users);
              


           
        },
        

    },
    
    
   
    
    
}
</script>
<style >

.row{
    margin-left: 10em;
}

</style>