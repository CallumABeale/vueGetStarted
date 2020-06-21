<template>
	<div>
		<p>Hi</p>
		<label for="flavor">Favourite ice cream flavor?</label>
		<input @input="changed" name="flavor" />
	</div>
</template>

<script>
export default {
	methods: {
		changed: function(event) {
			this.$store.commit('change', event.target.value);
		},
	},
};
</script>
