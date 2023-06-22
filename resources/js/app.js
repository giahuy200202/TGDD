
require('./bootstrap');
import { createApp } from 'vue';
import store from './store';
import Layout from './Layout.vue';

const app = createApp(Layout);

app.use(store)

app.mount('#app');
