import './bootstrap';
import MyApp from './vue/MyApp'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import { state, mutations } from './store'

const store = createStore({state, mutations})

createApp(MyApp).use(store).mount('#my-app');
