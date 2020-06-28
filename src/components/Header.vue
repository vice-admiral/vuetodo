<template>
	<nav class="navbar navbar-expand-lg navbar-dark">
		<div class="container app-nav">
			<div class="navbar-header app-nav">
				<div class="btn-group" role="group" aria-label="Basic example">
					<!-- <router-link to="/" tag="button" class="btn active" aria-pressed="true">
						<a>All</a>
					</router-link>-->
					<!-- <router-link to="/active" tag="button" class="btn active" aria-pressed="true">
						<a>Active</a>
					</router-link>-->
					<a>
						<router-link to="/" class="btn active" aria-pressed="true">All</router-link>
					</a>
					<a>
						<router-link to="/active" class="btn active" aria-pressed="true">Active</router-link>
					</a>
					<a>
						<router-link to="/completed" class="btn active" aria-pressed="true">Completed</router-link>
					</a>
				</div>
			</div>
		</div>
	</nav>
</template>



<style scoped>
	a {
		margin: 1px;
		color: black;
	}
	.btn {
		background: #fcecde;
		position: relative;
		z-index: 1;
	}

	.app-nav {
		/* background: #e3fce4 */
		margin: auto;
	}
</style>