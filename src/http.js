import Vue from 'vue';
import VueResource from 'vue-resource';


Vue.use(VueResource);

export const http=vue.http;

http.options.root='http://localhost:3000/';
