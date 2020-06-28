<template>
	<div class="container">
		<h1>Your Active Tasks</h1>
		<div class="card box">
			<div class="card-body">
				<ul class="list-group list-group-flush">
					<li v-for="(task, index) in tasks" class="list-group-item">
						{{ task.title }}
						<span
							class="float-right"
							style="cursor: pointer"
							@click="deleteTask(index)"
						>&#x2714;</span>
					</li>
				</ul>
				<hr />
				<p>
					{{ length }}
					<span v-if="length<=1">item</span>
					<span v-else>items</span> left
				</p>
				<app-header></app-header>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from "./Header";

	export default {
		data() {
			return {
				tasks: this.$store.getters.getActiveTasks,
				length: this.$store.getters.getActiveLen
			};
		},

		methods: {
			deleteTask(index) {
				const a = this.tasks.splice(index, 1);
				this.$store.commit("addFinishedTask", a[0]);
			}
		},
		beforeUpdate() {
			this.number = this.$store.getters.getActiveLen;
		},
		components: {
			appHeader: Header
		}
	};
</script>

<style scoped>
	.box {
		box-shadow: 10px 10px 10px #c5ccdb;
		border-radius: 0.5rem;
	}

	.card {
		border-radius: 0.5rem;
	}

	h1 {
		text-align: center;
	}

	.list-group-item {
		font-size: 1.5rem;
		line-height: 50px;
	}
</style>