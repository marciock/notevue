<template>
    <div>
        <NavBar></NavBar>
        
    </div>
</template>
<script>
import {mapState} from 'vuex';
import NavBar from './NavBar';

export default {
    name:'DashNotes',
    components:{NavBar},
    data:()=>{
        return {
            user:''
        }
    },
    computed:{
        ...mapState(['users']),
        
    },
    mounted(){

        let teste=sessionStorage.getItem('name');

        console.log(teste);
        
    }

}
</script>