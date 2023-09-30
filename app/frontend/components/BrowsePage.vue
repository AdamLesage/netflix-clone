<template>
  <div class="browse-background">
    <navbar-browse></navbar-browse>
  </div>
</template>

<script>
import { UserStore } from '@/stores/user_store';

  export default {
    data() {
      return {
        userStore: UserStore(),
      };
    },

    created() {
      this.userStore.setCurrentUser();
    },
  };
</script>

<style>
  .browse-background {
    overflow: visible;
    position: static;
    width: 100%;
    z-index: 0;
  }
</style>