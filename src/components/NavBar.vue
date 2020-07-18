<template>
    
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">NoteVue</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
                <button class="nav-link  btn btn-outline-light"  data-toggle="modal" data-target="#exampleModal"> <span class="fa fa-file"></span></button>
            </li>
           
           
            <li class="nav-item dropdown">
                <a  class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="fa fa-user-circle-o"></span > Olá {{schema.name}}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <div class="dropdown-item text-center" >{{schema.name}} {{schema.lastname}}</div>
                <div class="dropdown-item text-center" >{{schema.email}}</div>
                <div class="dropdown-item text-center" ><router-link to="/perfil" class="btn btn-primary rounded-pill" >Gerencie sua Conta</router-link></div>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item"  v-on:click="clear()">Sair</button>
                </div>
            </li>
            
            </ul>
            <form class="form-inline my-2 my-lg-0" @submit.prevent>
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><span class="fa fa-search"></span></button>
            </form>
        </div>
</nav>


</template>
<script>
import {mapActions} from 'vuex';
//import {mapState} from 'vuex';

export default {
    name:'NavBar',
    data:()=>{
        return{
            schema:{
                id:sessionStorage.getItem('id'),
                name:sessionStorage.getItem('name'),
                lastname:sessionStorage.getItem('lastname'),
                email:sessionStorage.getItem('email'),
                
            }
        }
    },
    
    methods:{
        ...mapActions(['clear']),
        
        
    },
}
</script>