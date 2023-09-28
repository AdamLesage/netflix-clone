import { createApp } from 'vue/dist/vue.esm-bundler';
import { createPinia } from 'pinia'
import 'vuetify/styles';
import { mdi } from 'vuetify/iconsets/mdi';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import axios from 'axios';


import HomePage from '../components/HomePage.vue';
import ManageProfiles from '../components/ManageProfiles.vue';
import EditProfile from '../components/EditProfile.vue';


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi,
    },
  },
});

const app = createApp();
const pinia = createPinia()

window.$http = axios;
axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

app.component('HomePage', HomePage);
app.component('ManageProfiles', ManageProfiles);
app.component('EditProfile', EditProfile);
app.use(vuetify);
app.use(pinia)

app.mount('#app');
