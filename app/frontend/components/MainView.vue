<template>
	<div class="fill-container">
		<div class="info meta-layer">
			<div class="logo-and-text">
				<div class="billboard-title">
					<v-img class="title-logo" :src="trailerStore.getTrailer"></v-img>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { TrailerStore } from '@/stores/trailer_store';

export default {
	data() {
		return {
			trailerStore: TrailerStore(),
		};
	},

};
</script>

<style>
	.fill-container {
		bottom: 0;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}

	.fill-container .info {
		bottom: 35%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		left: 4%;
		position: absolute;
		top: 0;
		width: 36%;
		z-index: 10;
	}

	.logo-and-text {
		transition: transform 1.5s cubic-bezier(.165,.84,.44,1);
		width: 100%;
	}

	.title-wrapper {
		transform-origin: left bottom 0px;
		transform: scale(1) translate3d(0px, 0px, 0px);
		transition-duration: 1300ms;
		transition-delay: 0ms;
	}

	.billboard-title {
		margin-bottom: 1.2vw;
		min-height: 13.2vw;
		position: relative;
	}

	.title-logo {
		transform-origin: bottom left;
		width: 100%;
	}
</style>