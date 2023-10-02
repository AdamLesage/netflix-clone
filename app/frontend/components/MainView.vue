<template>
	<div class="billboard">
		<div class="billboard-motion">
			<div class="bottom-layer full-screen">
				<div class="hero-image-wrapper">
					<v-img :src="trailerStore.getTrailer.picture_url" class="static-image image-layer"></v-img>
				</div>
			</div>
		</div>
	</div>
	<div class="fill-container">
		<div class="info meta-layer">
			<div class="logo-and-text">
				<div class="billboard-title">
					<v-img :src="trailerStore.getTrailer.logo_url" class="title-logo"></v-img>
				</div>

				<div class="info-synopsis info-margin">
					<div>{{ trailerStore.getTrailer.description }}</div>
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
	.billboard {
		background-color: #000;
		height: 56.25vw;
		position: absolute;
		width: 100%;
		z-index: 0;
	}

	.billboard-motion {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
	}

	.bottom-layer {
		z-index: 2;
	}

	.full-screen {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
	}

	.static-image {
		background-position: 50%;
		background-size: cover;
		bottom: 0;
		-ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
		filter: alpha(opacity=100);
		left: 0;
		opacity: 1;
		position: absolute;
		right: 0;
		top: 0;
		transition: opacity .4s cubic-bezier(.665,.235,.265,.8) 0s;
		width: 100%;
	}

	.hero-image-wrapper {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
	}

	.image-layer {
		z-index: 5;
	}

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

	.info-margin {
		margin: .5vw 0 0;
	}

	.info-synopsis {
		color: #fff;
		font-size: 1.2vw;
		font-weight: 400;
		line-height: normal;
		margin-top: .1vw;
		text-shadow: 2px 2px 4px rgba(0,0,0,.45);
		width: 100%;
	}
</style>