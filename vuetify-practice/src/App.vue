<template>
	<div id="app">
		<v-app>
			<Homepage />
			<Tabs />
		</v-app>
	</div>
</template>

<script>
import Tabs from './components/Tabs.vue';
import Homepage from './views/Homepage.vue';

export default {
	name: 'App',
	components: { Tabs, Homepage },
};
</script>

<style scoped></style>
