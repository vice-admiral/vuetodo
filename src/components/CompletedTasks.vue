<template>
	<div>
		<div class="container">
			<h1>Your Completed Tasks</h1>
			<div class="card box">
				<div class="card-body">
					<!-- <ul class="list-group list-group-flush">
						<li v-for="(task, index) in tasks" class="list-group-item">
							{{ task.title }}
							<span
								class="float-right"
								style="cursor: pointer"
								@click="deleteTask(index)"
							>&#x2714;</span>
						</li>
					</ul>-->
					<ul class="list-group list-group-flush">
						<li v-for="item in finishedTasks" class="list-group-item list-group-item-success">
							{{ item.title }}
							<span style="cursor:pointer">
								<svg
									class="bi bi-check-circle float-right"
									width="1em"
									height="1em"
									viewBox="0 0 16 16"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
									/>
									<path
										fill-rule="evenodd"
										d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
									/>
								</svg>
							</span>
						</li>
					</ul>

					<app-header></app-header>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from "./Header";
	export default {
		computed: {
			finishedTasks() {
				return this.$store.getters.getFinishedTasks;
			}
		},
		components: {
			appHeader: Header
		}
	};
</script>

<style scoped>
	.box {
		box-shadow: 10px 10px 10px #c5ccdb;
	}

	h1 {
		text-align: center;
	}
	.list-group-item {
		font-size: 1.5rem;
		line-height: 50px;
		text-decoration: line-through;
	}

	svg {
		margin: auto;
	}
</style>