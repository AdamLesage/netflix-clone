<template>
	<div class="list-profiles-container">
		<div class="list-profiles">
			<div class="profile-gate-label">Gestion des profils :</div>
			<div class="choose-profile">
				<div v-for="user in userStore.getUsers" class="profile" @click="selectUser(user)">
          <div class="profile-icon" style="cursor: pointer;">
            <v-img :src="user.image.image_link" class="image-profile">
            </v-img>
            <div class="edit-user-overlay">
            </div>
            <div class="icon-container">
              <v-icon>mdi-pencil</v-icon>
            </div>
          </div>
          <span class="profile-name">{{ user.username }}</span>
				</div>
			</div>
		</div>

    <v-dialog v-model="dialogEditProfile" fullscreen hide-overlay transition="dialog-top-transition">
      <v-card style="background-color: #141414;">
        <div class="centered-div">
          <div class="profile-actions-container">
            <h1>Modifier le profil</h1>

            <div class="profile-metadata profile-entry">
              <div class="main-profile-avatar">
                <div class="avatar-box">
                  <v-img :src="userStore.getCurrentUser.image.image_link"></v-img>
                  
                </div>
              </div>

              <div class="main-edit-parent"></div>
            </div>

            <button class="profile-button preferred-action">Enregistrer</button>
            <button class="profile-button">Annuler</button>
          </div>
        </div>
      </v-card>
    </v-dialog>

		<span>
			<a href="/" class="manage-profile-finished-button">Terminé</a>
		</span>
	</div>
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

	created() {
		this.userStore.setUsers();
	},

	methods: {
		selectUser(user) {
			this.userStore.setCurrentUser(user);
      this.dialogEditProfile = true;
		},
	},

};
</script>

<style>
	.manage-profile-finished-button {
		background-color: white;
		color: black;
		cursor: pointer;
		display: block;
		font-size: 1.2vw;
		letter-spacing: 2px;
		margin: 2em 0 1em;
		padding: .5em 1.5em;
		text-decoration: none;
	}

	.manage-profile-finished-button:hover {
		background-color: red;
		color: #fff;
	}

	.edit-user-overlay {
		opacity: 0.4;
		background-color: black;
		align-items: center;
		bottom: 0;
		display: flex;
		justify-content: center;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}

	.edit-user-overlay:hover {
		border-color: grey;
    color: #fff;
	}

	.icon-container {
		align-items: center;
		bottom: 0;
		display: flex;
		justify-content: center;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
    border: 5px solid #141414;
	}

	.icon-container:hover {
		border-color: #fff;
	}

	.icon-container .v-icon {
		transform: scale(2);
		color: white;
	}

  .centered-div {
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
    opacity: 1;
    transform: scale(1);
    position: initial;
    transition-duration: 450ms;
    transition-delay: 200ms;
  }

  .profile-actions-container {
    position: relative;
    text-align: left;
  }

  .profile-metadata {
    display: flex;
    padding: 2em 0;
  }

  .profile-entry {
    border-bottom: 1px solid #333;
    border-top: 1px solid #333;
  }

  .preferred-action:hover {
    background: #c00;
    border: 1px solid #c00;
    color: #fff;
  }

  .main-profile-avatar {
    margin-right: 1.5vw;
    max-width: 180px;
    min-width: 80px;
    white-space: nowrap;
    width: 8vw;
  }

  .profile-edit-parent {
    max-width: 500px;
  }

  .avatar-box {
    position: relative;
  }
</style>
