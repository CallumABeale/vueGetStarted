<template>
	<div>
		<v-tabs dark grow icons-and-text color="orange lighten-1">
			<v-tab>
				Gear {{ $routes.params.Gear }}
				<v-icon dark>mdi-tshirt-crew</v-icon>
			</v-tab>
			<v-tab>
				Events
				<v-icon dark>mdi-calendar-range-outline</v-icon>
			</v-tab>
			<v-tab>
				Stats
				<v-icon dark>mdi-chart-arc</v-icon>
			</v-tab>
		</v-tabs>
	</div>
</template>

<script>
import Gear from '../views/Gear.vue';
import Events from '../views/Events.vue';
import Statistics from '../views/Statistics.vue';

export default {
	name: 'Tabs',
	components: { Gear, Events, Statistics },
};
</script>

<style scoped></style>
