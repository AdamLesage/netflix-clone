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
    },

    async editUser(user) {
      try {
        await axios.put(`/users/${user.id}.json`, { user: user });
        this.setUsers();
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la mise à jour de l\'utilisateur :', error);
      }
    }
  },

  getters: {
    getUsers: (state) => state.users,
    getCurrentUser: (state) => state.currentUser,
  },
})