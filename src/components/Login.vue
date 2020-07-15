<template>

    <div>
        <form>
       <div class="row mt-5">
           <div class="col-sm-8">
            <div class="card shadow p-3 mb-5 bg-white rounded" >
                <div class="card-body">
                    <h5 class="card-title ">Login</h5>
                    <div class=" card-subtitle">
                        <div class="form-group ">
                            <label for="email">Email</label>
                            <input type="mail" id="email"  class="form-control" v-model="schema.email">
                        </div>
                        <div class="form-group">
                            <label for="password">senha</label>
                            <input type="password" id="password"  class="form-control" v-model="schema.password">
                        </div>
                    </div>
                    <div class="form-group float-right">
                        <router-link to="/cadastro" class="card-link">Cadastrar</router-link>
                        <button type="button" class="btn btn-outline-success ml-3" >Entrar</button>
                    </div>
                </div>
            </div>
           </div>
           
       </div>
        </form>
    </div>
</template>
<script>


export default {
    name:'Login',
    data:()=>{
        return{
            schema:{
                email:'',
                password:''
            }
        }
    }
}
</script>
<style >

.row{
    margin-left: 10em;
}

</style>