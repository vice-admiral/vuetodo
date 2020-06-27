<template>
	<nav class="navbar navbar-expand-lg navbar-dark">
		<div class="container app-nav">
			<div class="navbar-header app-nav">
				<div class="btn-group" role="group" aria-label="Basic example">
					<router-link to="/" tag="button" class="btn btn-primary active" aria-pressed="true">
						<a>All</a>
					</router-link>
					<router-link to="/active" tag="button" class="btn btn-primary active">
						<a>Active</a>
					</router-link>
					<router-link to="/completed" tag="button" class="btn btn-primary active">
						<a>Completed</a>
					</router-link>
				</div>
			</div>
		</div>
	</nav>
</template>



<style scoped>
	a {
		margin: 5px;
		color: black;
	}

	.app-nav {
		/* background: #e3fce4 */
		margin: auto;
	}
</style>