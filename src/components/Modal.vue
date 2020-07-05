<template>
	<div id="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<input
							type="text"
							v-model="input"
							ref="search"
							name="search"
							class="form-control"
							placeholder="What needs to be done?"
              @keyup.enter="addTask"
						/>
					</div>

					<div class="modal-footer">
						<button class="btn btn-primary" @click="addTask" >OK</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				input: "",
				isInputEmpty: null
			};
		},

		created() {
			this.$nextTick(function() {
				this.$refs.search.focus();
			});
		},
		methods: {
			addTask() {
				if (this.input.trim() === "") {
					this.isInputEmpty = true;
					this.$emit("addTask");
					return;
				}
				this.isInputEmpty = false;
				let arr = this.input.split("");
				arr[0] = arr[0].toUpperCase();
				this.input = arr.join("");

				const newTask = {
					id: this.id++,
					title: this.input,
					edit: false,
					isDone: false
				};
				this.$store.commit("addTask", newTask);
				this.input = "";
				this.input.focus;
				this.$emit("addTask");
				// this.task.focus;
			}
		}
	};
</script>

<style scoped>
	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: table;
		transition: opacity 0.3s ease;
	}

	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
	}

	.modal-container {
		width: 300px;
		margin: 0px auto;
		padding: 10px;
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
		transition: all 0.3s ease;
		font-family: Helvetica, Arial, sans-serif;
	}

	.modal-header label {
		padding-right: 5px;
	}

	/*
																 * The following styles are auto-applied to elements with
																 * transition="modal" when their visibility is toggled
																 * by Vue.js.
																 *
																 * You can easily play with the modal transition by editing
																 * these styles.
																 */

	/* .modal-enter {
							opacity: 0;
						}

						.modal-leave-active {
							opacity: 0;
						}

						.modal-enter .modal-container,
						.modal-leave-active .modal-container {
							-webkit-transform: scale(1.1);
							transform: scale(1.1);
						} */
</style>