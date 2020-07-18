<template>
    <div>
        <NavBar></NavBar>
        <div class="container mt-3">
            <div class="row" >
                <div class="col-sm-" v-for="note in notes" :key="note.id" >
                    <Note :title="note.title" :note="note.note" :email="note.u.email"  />
                </div>
            </div>
        </div>
        <NewNote />
        <ButtonPlus />
        
    </div>
</template>
<script>
import {mapState} from 'vuex';
import {mapActions} from 'vuex';


import NavBar from './NavBar';
import NewNote from './NewNote'
import ButtonPlus from './ButtonPlus'
import Note from './Note';

export default {
    name:'DashNotes',
    components:{NavBar,Note,NewNote,ButtonPlus},
    data:()=>{
        return {
            user:''
        }
    },
    computed:{
        ...mapState(['users','notes']),
        
    },
    methods:{
        ...mapActions(['showNotes']),
    },
    created(){
        this.showNotes();
    },
    updated(){
      this.showNotes();
    }
    
   

}
</script>