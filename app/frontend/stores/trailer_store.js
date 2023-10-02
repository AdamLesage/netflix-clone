import { defineStore } from 'pinia'
import axios from 'axios';

export const UserStore = defineStore('userStore', {
  state: () => {
    return {
      trailer: {},
    }
  },

  actions: {
    async setTrailer() {
      try {
        const response = await axios.get('/get_trailer.json');
        this.trailer = response.data;
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération de la bande annonce :', error);
      }
    }
  },

  getters: {
    getTrailer: (state) => state.trailer,
  },
})