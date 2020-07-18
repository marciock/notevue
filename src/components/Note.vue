<template>
    <div class="mb-2 ml-2" >
        <div class="card" style="width: auto;" >
            <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
                <ul>
                    <li> {{email}} </li>
                    <li> Criado em {{created}}</li>
                    <li> Última Atualização {{updated}}</li>
                </ul>
            </h6>
            <p class="card-text">{{note}}</p>
            <a href="#/dash" class="card-link bnt btn-outline-warning "><span class="fa fa-pencil"></span></a>
            <a href="#/dash" class="card-link bnt btn-outline-danger "><span class="fa fa-trash"></span></a>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name:'Note',
    props:['title','note','created','updated','email']
}
</script>