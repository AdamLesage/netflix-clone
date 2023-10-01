import { defineStore } from 'pinia'
import axios from 'axios';

export const UserStore = defineStore('userStore', {
  state: () => {
    return {
      users: [],
      currentUser: null,
      usersExceptCurrentUser: [],
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

    async setLogCurrentUser(user) {
      try {
        await axios.get(`/set_current_user.json?userId=${user.id}`);
        this.currentUser = user;
        console.log(this.currentUser);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération de l\'utilisateur :', error);
      }
    },

    async setCurrentUser() {
      try {
        const response = await axios.get('/get_current_user.json');
        this.currentUser = response.data;
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération de l\'utilisateur :', error);
      }
    },

    async setUsersExpectCurrentUser() {
      try {
        const response = await axios.get('/get_user_except_current_user.json');
        this.usersExceptCurrentUser = response.data.user;
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des utilisateurs :', error);
      }
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
    getUsersExceptCurrentUser: (state) => state.usersExceptCurrentUser,
  },
})