<template>
  <div class="fix-header">
    <div class="fix-header-container" style="background-color: transparent;">
      <div class="main-header has-billboard menu-navigation" style="display: flex;">
        <a href="/browse" class="div-logo-netflix-navbar">
          <v-img src="https://www.pngall.com/wp-content/uploads/4/Netflix-Logo-HD.png"></v-img>
        </a>

        <div class="tabbed-primary-navigation">
          <div v-for="category in fixHeaderCategories">
            <a :href="category.link" class="fix-header-categories">{{ category.name }}</a>
          </div>
        </div>

        <div class="tabbed-secondary-navigation">
          <div class="nav-element">
            <div class="search-box">
              <v-icon dark>mdi-magnify</v-icon>
            </div>
          </div>

          <div class="nav-element">
            <v-icon>mdi-bell-outline</v-icon>
          </div>

    <div class="nav-element" @mouseenter="isNavbarProfileHover = true" @mouseleave="isNavbarProfileHover = false" style="height: 100%;">
            <div class="account-menu-item" style="height: 100%;">
              <img v-if="userStore.getCurrentUser" :src="userStore.getCurrentUser.image.image_link" style="width: 30px;"/>
              <v-icon class="rotate-icon" :class="{ 'rotate-180': isNavbarProfileHover }">
                mdi-chevron-down
              </v-icon>

              <div class="account-dropdown-button">
                <div v-if="isNavbarProfileHover" class="dropdown-container" @mouseenter="isNavbarProfileHover = true" @mouseleave="isNavbarProfileHover = false">
                  <div v-for="user in userStore.getUsersExceptCurrentUser" class="item-user-clickable">
                    <div>
                      <v-img :src="user.image.image_link" class="drop-down-image"></v-img>
                    </div>
                    <span class="navbar-profile-text">{{ user.username }}</span>
                  </div>

                  <div v-for="parameter in navbarProfileParemeters" class="item-user-clickable">
                    <div>
                      <v-icon class="drop-down-image">{{ parameter.icon }}</v-icon>
                    </div>
                    <a :href="parameter.link" class="navbar-profile-text">{{ parameter.name }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        // Stores
        userStore: UserStore(),

        isNavbarNotificationHover: false,
        isNavbarProfileHover: false,
        fixHeaderCategories: [
          { name: 'Accueil', link: '/browse' },
          { name: 'Séries', link: '/browse/series' },
          { name: 'Films', link: '/browse/movies' },
          { name: 'Nouveautés les plus regardées', link: '/latest' },
          { name: 'Ma liste', link: '/browse/my-list' },
          { name: 'Explorer par langue', link: '/browse/original-audio' },
        ],
        navbarProfileParemeters: [
          { name: 'Gérer les profils', link: '/ManageProfiles', icon: 'mdi-pencil' },
        ],
      };
    },
  };
</script>

<style>
  .fix-header {
    position: sticky;
    top: 0;
    height: auto;
    min-height: 70px;
    z-index: 1;
  }

  .fix-header-container {
    left: 0;
    position: relative;
    right: 0;
    top: 0;
    z-index: 1;
  }

  .main-header {
    height: 68px;
    z-index: 2;
  }

  .menu-navigation {
    background-image: linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent);
  }

  .has-billboard {
    background-color: transparent;
  }

  .logo {
    margin-right: 25px;
    font-size: 25px;
    color: #e50914;
    cursor: pointer;
    display: inline-block;
    font-size: 1.8em;
    margin-right: 5px;
    text-decoration: none;
    vertical-align: middle;
  }

  .fix-header-categories {
    display: flex;
    flex-direction: row;
    color: #e5e5e5;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    text-decoration: none;
    transition: color .1s ease-in;
    font-size: 14px;
  }

  .fix-header-categories:hover {
    color: #b3b3b3;
  }

  .tabbed-primary-navigation {
    align-items: center;
    display: flex;
    margin: 0;
    padding: 0;
    gap: 20px;
  }

  .tabbed-secondary-navigation {
    align-items: center;
    display: flex;
    flex-grow: 1;
    height: 100%;
    justify-content: flex-end;
    position: absolute;
    right: 4%;
    top: 0;
    width: 10%;
  }

  .div-logo-netflix-navbar {
    width: 7%;
    display: flex;
    margin: 0 30px;
    padding: 20px;
  }

  .nav-element {
    margin-right: 15px;
  }

  .search-box {
    display: inline-block;
    vertical-align: middle;
  }

  .account-menu-item {
    font-size: 12px;
    position: relative;
    z-index: 0;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .image-profile-navbar {
    height: 3%;
    width: 3%;
  }

  .rotate-icon {
    transition: transform 0.3s ease;
  }
  
  .rotate-180 {
    transform: rotate(180deg);
  }

  .account-dropdown-button {
    align-items: center;
    cursor: pointer;
    display: flex;
    width: 10%;
  }

  .dropdown-container {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: rgba(20, 20, 20, 0.7);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    height: 100px;
}

  .drop-down-image {
    height: 30px;
    width: 30px;
  }

  .item-user-clickable {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    cursor: pointer;
  }

  .navbar-profile-text {
    color: #e5e5e5;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    text-decoration: none;
    transition: color .1s ease-in;
    margin-right: 120px;
  }

  .navbar-profile-text:hover {
    text-decoration: underline;
  }
</style>