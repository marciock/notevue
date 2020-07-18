<template>
    <div class="container mt-2">
        <div class="row row-left">
            <div class="col-sm-8">
                <form  >
                <h4>Editando Cadastro de </h4>
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
                        <input type="password" id="password"  class="form-control" v-model="users.password">
                    </div>
                    <div class="form-group">
                        <label for="confirm" >Repetir Senha</label>
                        <input type="password" id="confirm"  class="form-control" v-model="confirm">
                    </div>
                    <div class="form-group float-right">
                        <router-link to="/dash" class="btn btn-outline-danger">Cancelar</router-link>
                        <button type="submit" class="btn btn-outline-success ml-3" >Salvar</button>
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
            confirm:''
        }
        
    },
    computed:{
        ...mapState(['users'])
    },
    methods:{
        ...mapActions(['editUserAction'])
    }

}
</script>