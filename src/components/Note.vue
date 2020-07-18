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
            <a href="#/dash" class="card-link bnt btn-outline-danger " @click="del()"><span class="fa fa-trash"></span></a>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
    name:'Note',
    props:['title','note','created','updated','email','Id'],
    methods:{
        ...mapActions(['delNoteActions']),
        del(){
            let id={id:this.Id};
            this.delNoteActions(id);
        }
    }
}
</script>