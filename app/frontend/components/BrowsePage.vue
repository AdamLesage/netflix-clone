<template>
  <div class="browse-background">
    <navbar-browse></navbar-browse>
  </div>
</template>

<script>
import { UserStore } from '@/stores/user_store';
import { TrailerStore } from '@/stores/trailer_store';

export default {
  data() {
    return {
      // Stores
      userStore: UserStore(),
			trailerStore: TrailerStore(),
    };
  },

  created() {
    this.userStore.setCurrentUser();
    this.userStore.setUsers();
    this.userStore.setUsersExpectCurrentUser();
		this.trailerStore.setTrailer();
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