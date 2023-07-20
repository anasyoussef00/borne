import { createApp } from 'vue';
import { createPinia } from 'pinia';

import devtools from '@vue/devtools';

import '@/assets/css/main.css';
import '@/tailwind.css';
import router from '@/router';
import App from '@/App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as icons from './icons';

if (import.meta.env.DEV) devtools.connect('http://localhost', 8098);

library.add(icons);

const app = createApp(App).provide<boolean>('IS_DEV', import.meta.env.DEV);

app
  .use(router)
  .use(createPinia())
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
