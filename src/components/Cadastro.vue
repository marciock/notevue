<template>
    <div class="row">
        <div class="col-sm-8">
            <form>
            <h4>Novo Cadastro</h4>
                <div class="form-group">
                    <label for="name" >Nome</label>
                    <input type="text" id="name"  class="form-control" v-model="schema.name">
                </div>
                <div class="form-group">
                    <label for="lastname" >Sobrenome</label>
                    <input type="text" id="lastname"  class="form-control" v-model="schema.lastname">
                </div>
                <div class="form-group">
                    <label for="email" >Email</label>
                    <input type="mail" id="email"  class="form-control" v-model="schema.email">
                </div>
                <div class="form-group">
                    <label for="password" >Senha</label>
                    <input type="password" id="password"  class="form-control" v-model="schema.password">
                </div>
                <div class="form-group">
                    <label for="confirm" >Repetir Senha</label>
                    <input type="password" id="confirm"  class="form-control" v-model="confirm">
                </div>
                <div class="form-group float-right">
                    <router-link to="/" class="btn btn-outline-danger">Cancelar</router-link>
                    <button type="button" class="btn btn-outline-success ml-3" >Salvar</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name:'Cadastro',
    data:()=>{
        return{
            schema:{
                name:'',
                lastname:'',
                email:'',
                password:''
            },
            confirm:''
        }
    }
}
</script>
<style >
.row{
    margin-left: 10em;
}
</style>