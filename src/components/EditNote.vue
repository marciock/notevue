<template>
    <div>
        <div class="modal fade" tabindex="-1" id="editModal" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                 <h5 class="modal-title">Editando Nota</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form @submit.prevent="save()">
            <div class="modal-body">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Título" v-model="note.title">
                </div>
                <div class="form-group">
                    <textarea rows="5" class="form-control" v-model="note.note"></textarea> 
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
import {mapState} from 'vuex';

export default {
    name:'EditNote',
   computed:{
       ...mapState(['note'])
   },
   
    methods:{
        ...mapActions(['updateNoteActions']),
      
        save(){
            
         // console.log(this.note)
          this.updateNoteActions(this.note);
           $('#editModal').modal('hide')
            

        },
        

    },
    
}
</script>