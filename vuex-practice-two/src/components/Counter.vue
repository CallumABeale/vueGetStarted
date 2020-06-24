<template>
	<div>
		<p>
			<button @click="increment">+</button>
			<button @click="decrement">-</button>
			{{ $store.state.count }}
		</p>
	</div>
</template>

<script>
export default {
	methods: {
		increment() {
			this.$store.commit('increment');
			console.log(this.$store.state.count);
		},
		decrement() {
			this.$store.commit('decrement');
			console.log(this.$store.state.count);
		},
	},
};
</script>
