<template>
    
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">NoteVue</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
                <a class="nav-link " href="#/dash" > <span class="fa fa-file"></span></a>
            </li>
           
           
            <li class="nav-item dropdown">
                <a  class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="fa fa-user-circle-o"></span > Olá {{users.name}}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <div class="dropdown-item text-center" >{{users.name}} {{users.lastname}}</div>
                <div class="dropdown-item text-center" >{{users.email}}</div>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#/dash" >Sair</a>
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
export default {
    name:'NavBar',
    data:()=>{
        return{
            users:{
                id:sessionStorage.getItem('id'),
                name:sessionStorage.getItem('name'),
                lastname:sessionStorage.getItem('lastname'),
                email:sessionStorage.getItem('email'),
                
            }
        }
    }
}
</script>