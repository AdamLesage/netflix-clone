<template>

</template>

<script>
import { UserStore } from '@/stores/user_store';

export default {
  data() {
    return {
      userStore: UserStore(),
      dialogEditProfile: false,
    };
  },

  methods: {
    selectUser(user) {
      this.userStore.setCurrentUser(user);
    },

    editUserProfile() {
      this.dialogEditProfile = true;
    },
  },

};
</script>

<style>
</style>