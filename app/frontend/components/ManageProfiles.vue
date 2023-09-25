<template>
	<div class="list-profiles-container">
		<div class="list-profiles">
			<div class="profile-gate-label">Gestion des profils :</div>
			<div class="choose-profile">
				<div v-for="user in userStore.getUsers" class="profile" @click="selectUser(user)">
					<a href="/browse" style="text-decoration: none;">
						<div class="profile-icon">
							<v-img :src="user.image.image_link" class="image-profile">
							</v-img>
							<div class="edit-user-overlay">
							</div>
							<div class="icon-container">
								<v-icon>mdi-pencil</v-icon>
							</div>
						</div>
						<span class="profile-name">{{ user.username }}</span>
					</a>
				</div>
			</div>
		</div>

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
		};
	},

	created() {
		this.userStore.setUsers();
	},

	methods: {
		selectUser(user) {
			this.userStore.setCurrentUser(user);
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
</style>
