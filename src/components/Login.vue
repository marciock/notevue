<template>

    <div>
       <div class="row mt-5">
           <div class="col-sm-8">
            <div class="card shadow p-3 mb-5 bg-white rounded" >
                <div class="card-body">
                    <h5 class="card-title ">Login</h5>
                    <div class=" card-subtitle">
                        <div class="form-group ">
                            <label for="email">Email</label>
                            <input type="mail" id="email"  class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="password">senha</label>
                            <input type="password" id="password"  class="form-control">
                        </div>
                    </div>
                    <div class="form-group float-right">
                        <a href="#" class="card-link">Cadastrar</a>
                        <button type="button" class="btn btn-outline-success ml-3" >Entrar</button>
                    </div>
                </div>
            </div>
           </div>
       </div>
        
    </div>
</template>
<script>


export default {
    name:'Login'
}
</script>
<style >

.row{
    margin-left: 10em;
}

</style>