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

          <div class="nav-element">
            <div class="account-menu-item">
              <img src="https://www.pngall.com/wp-content/uploads/4/Netflix-Logo-HD.png" style="width: 30px;"/>
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

        fixHeaderCategories: [
          { name: 'Accueil', link: '/browse' },
          { name: 'Séries', link: '/browse/series' },
          { name: 'Films', link: '/browse/movies' },
          { name: 'Nouveautés les plus regardées', link: '/latest' },
          { name: 'Ma liste', link: '/browse/my-list' },
          { name: 'Explorer par langue', link: '/browse/original-audio' },
        ]
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
    display: block;
    font-size: 12px;
    position: relative;
    z-index: 0;
  }

  .image-profile-navbar {
    height: 3%;
    width: 3%;
  }
</style>