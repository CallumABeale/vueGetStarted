import Vue from 'vue';
import VueRouter from 'vue-router';
import Gear from '../views/Gear.vue';
import Events from '../views/Events.vue';
import Statistics from '../views/Statistics.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/gear',
		name: 'gear',
		component: Gear,
	},
	{
		path: '/events',
		name: 'events',
		component: Events,
	},
	{
		path: '/statistics',
		name: 'statistics',
		component: Statistics,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
