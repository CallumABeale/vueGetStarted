<template>
	<div id="app">
		<Tabs />
		<router-view />
	</div>
</template>

<script>
import Tabs from './components/Tabs.vue';

export default {
	name: 'App',
	components: { Tabs },
};
</script>

<style scoped></style>
