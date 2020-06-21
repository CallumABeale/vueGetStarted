import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

export const store = new VueX.Store({
	state: {
		flavor: '',
	},
	mutations: {
		change(state, flavor) {
			state.flavor = flavor;
		},
	},
	getters: {
		flavor: (state) => state.flavor,
	},
});
