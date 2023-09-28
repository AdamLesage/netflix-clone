import { defineStore } from 'pinia'
import axios from 'axios';

export const UserStore = defineStore('userStore', {
  state: () => {
    return {
      users: [],
      currentUser: null,
    }
  },

  actions: {
    async setUsers() {
      try {
        const response = await axios.get('/users.json');
        this.users = response.data.user
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des utilisateurs :', error);
      }
    },
    
    async setCurrentUser(user) {
      this.currentUser = user;
    }
  },

  getters: {
    getUsers: (state) => state.users,
    getCurrentUser: (state) => state.currentUser,
  },
})