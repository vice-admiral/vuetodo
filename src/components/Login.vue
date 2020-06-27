<template>
	<div class="text-center">
		<form class="form-signin">
			<img
				class="mb-4"
				src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
				alt
				width="72"
				height="72"
			/>
			<h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
			<label for="inputEmail" class="sr-only">Email address</label>
			<input type="email" id="inputEmail" class="form-control" placeholder="Email address" autofocus />
			<label for="inputPassword" class="sr-only">Password</label>
			<input type="password" id="inputPassword" class="form-control" placeholder="Password" />
			<div class="checkbox mb-3">
				<label>
					<input type="checkbox" value="remember-me" /> Remember me
				</label>
			</div>
      <router-link to='/' class="btn btn-lg btn-primary btn-block" tag='button' >Sign in</router-link>
		</form>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.text-center {
		width: 75%;
		margin: 10px auto;
	}
</style>