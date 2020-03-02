import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import VueRouter from 'vue-router';
import { routes } from './routes';


Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.config.productionTip = false

// Vue.filter('to-lowercase', function(value) {
//     return value.toLowerCase();
// });

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')