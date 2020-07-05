<template>
	<div>
		<app-header></app-header>
		<div class="row justify-content-md-center align-items-start">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Header from "./components/Header";
	export default {
		components: {
			appHeader: Header
		}
	};
</script>

<style>
	body {
		padding: 0;
		background: #f3d2c1;
	}

	@media (max-width: 320px) {
		body {
			background: black;
		}
	}

	@media (max-width: 768px) {
		* {
			font-size: 12px;
		}
	}
</style>
