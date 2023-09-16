// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia'

// Utilisez le plugin Vue Pinia
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

// Définissez les composants Vue que vous souhaitez utiliser
import SelectProfile from '@/layout/SelectProfile'
Vue.component('SelectProfile', SelectProfile);

// Créez une instance Vue
const app = new Vue({
  // Options de configuration de Vue
  pinia,
  // Montez l'instance Vue à un élément HTML (par exemple, un div avec l'id "app")
  el: '#app', // Assurez-vous que l'ID "app" correspond à votre vue HTML
});
