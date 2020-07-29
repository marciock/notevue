<template>
    <div>
        <div class="modal fade" tabindex="-1" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                 <h5 class="modal-title">Nova Nota</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form @submit.prevent="save()">
            <div class="modal-body">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Título" v-model="schema.title">
                </div>
                <div class="form-group">
                    <textarea rows="5" class="form-control" v-model="schema.note"></textarea> 
                </div>
            </div>
            <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
             <button type="submit" class="btn btn-primary" >Salvar</button>
            </div>
            </form>
            </div>
        </div>
    </div>

        
    </div>
    
</template>
<script>

import $ from 'jquery'

import {mapActions} from 'vuex';

export default {
    name:'NewNote',
    data:()=>{
        return{
            schema:{
                id:sessionStorage.getItem('id'),
                title:'',
                note:''

            }
        }
       
    },
    methods:{
        ...mapActions(['saveAction','statusActions']),
        save(){
            //this.statusActions('success')
            const data={data:this.schema,url:'note_save'};
           this.saveAction(data);
           this.statusActions('success')
          
           $('#exampleModal').modal('hide')
           
   

        }

    }
}
</script>