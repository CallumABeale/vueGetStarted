<template>
	<v-app>
		<v-navigation-drawer v-model="sidebar" app> </v-navigation-drawer>

		<v-toolbar app>
			<div class="hidden-sm-and-up">
				<v-toolbar-side-icon @click="sidebar = !sidebar"></v-toolbar-side-icon>
			</div>
			<v-toolbar-title>{{ appTitle }}</v-toolbar-title>
			<v-spacer></v-spacer>
		</v-toolbar>

		<v-content></v-content>
	</v-app>
</template>
