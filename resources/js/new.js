import './bootstrap';
import MyTask from './vue/TaskPage'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import { state, mutations } from './store'

const store = createStore({state, mutations})


createApp(MyTask).use(store).mount('#my-task');
