
require('./bootstrap');
import { createApp } from 'vue';
import { createStore } from 'vuex';

import Layout from './Layout.vue';
import FriendContact from './components/FriendContact.vue';


const store = createStore({
    state() {
      return {};
    },
  });

const app = createApp(Layout);

app.use(store)

app.component('friend-contact', FriendContact);

app.mount('#app');
