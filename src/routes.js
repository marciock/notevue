import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'Login',
            component:()=>import('@/components/Login')
        },
        {
            path:'/cadastro',
            name:'Cadastro',
            component:()=>import('@/components/Cadastro')
        },
        {
            path:'/dash',
            name:'DashNotes',
            component:()=>import('@/components/DashNotes')
        },
        {
            path:'/perfil',
            name:'CadastroEdit',
            component:()=>import('@/components/CadastroEdit')
        }
    ]
})