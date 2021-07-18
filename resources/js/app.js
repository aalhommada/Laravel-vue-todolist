require('./bootstrap');
require('popper.js');


import Vue from 'vue'
import App from './components/app.vue'


const app = new Vue({
el:'#app',
components:{App}
})