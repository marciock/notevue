<template>
    <div class="mb-2 ml-2" >
        <div class="card" style="width: auto;" >
            <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
                <ul>
                    <li> {{email}} </li>
                    <li> Criado em {{new Date(created).toLocaleDateString(options)}}</li>
                    <li> Última Atualização {{new Date(updated).toLocaleDateString(options)}}</li>
                </ul>
            </h6>
            <p class="card-text">{{note}}</p>
            <a href="#/dash" class="card-link bnt btn-outline-warning " data-toggle="modal" data-target="#editModal" @click="edit()" ><span class="fa fa-pencil"></span></a>
            <a href="#/dash" class="card-link bnt btn-outline-danger " @click="del()"><span class="fa fa-trash"></span></a>
            </div>
        </div>
        <EditNote />
    </div>
</template>
<script>
import EditNote from './EditNote';

import {mapActions} from 'vuex';


export default {
    name:'Note',
    components:{EditNote},
    data:()=>{
        return{
            options:{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        }
    },
    
    props:['title','note','created','updated','email','Id'],
    
    
    methods:{
        ...mapActions(['delNoteActions','editNoteActions','showNotes','statusActions']),
        del(){
            let id={id:this.Id};
            this.delNoteActions(id);
          
                this.statusActions('success')
        },
        edit(){
            const id={id:this.Id}
            //console.log(this.Id)
            this.editNoteActions(id);
            //this.statusActions('delete')
        },
        
    },
    
}
</script>