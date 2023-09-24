<template>
  <div class="list-profiles-container">
    <div class="list-profiles">
      <div class="profile-gate-label">Qui est-ce ?</div>
      <div class="choose-profile">
        <div v-for="user in userStore.getUsers" class="profile">
          <a>
            <div class="profile-icon">
              <v-img
                :src="user.image.image_link"
              ></v-img>
            </div>
            <span class="profile-name">{{ user.username }}</span>
          </a>
        </div>
      </div>
    </div>
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
    this.userStore.setUsers();
    console.log(this.userStore.getUsers);
  },

};
</script>

<style>
  .list-profiles-container {
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 100;
  }

  .list-profiles {
    max-width: 80%;
  }

  .profile-gate-label {
    color: #fff;
    font-size: 3.5vw;
    font-weight: unset;
    width: 100%;
    text-align: center;
  }

  .profile-icon {
    background-color: #333;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    height: 10vw;
    max-height: 200px;
    max-width: 200px;
    min-height: 84px;
    min-width: 84px;
    position: relative;
    text-decoration: none;
    width: 10vw;
  }

  .choose-profile {
    margin: 2em 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .profile {
    margin: 0 2vw 0 0;
  }

  .profile-name {
    color: grey;
    display: block;
    font-size: 1.3vw;
    line-height: 1.2em;
    margin: .6em 0;
    min-height: 1.8em;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
  }
</style>
