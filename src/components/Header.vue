<template>
	<nav class="navbar">
		<a class="navbar-brand" href="#">
			<img src="https://cdn.onlinewebfonts.com/svg/img_550710.png" width="50" height="50" alt />
			Todos
		</a>
		<div class="btn-group" role="group">
			<router-link to="/" class="btn active">All</router-link>

			<router-link to="/active" class="btn active">Active</router-link>

			<router-link to="/completed" class="btn active">Completed</router-link>
		</div>
	</nav>
</template>



<style scoped>
	.container {
		padding: 0;
	}
	.navbar {
		/* margin: auto; */
		color: #172c66;
		background: #f3d2c1;
		margin-top: 0;
	}

	.navbar a {
		margin: 0;
		padding: 0 12px;
	}

	a {
		color: #172c66;
		font-weight: 500;
	}

	.btn-group {
		margin: 0;
		color: #172c66;
	}
</style>