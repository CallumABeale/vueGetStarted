import firebase from 'firebase';
import 'firebase/firestore';

// firebase init goes here
const config = {
	apiKey: 'AIzaSyCg4z3P3GRrt1slU9_wp1KmV91yLjr5g4Y',
	authDomain: 'vuegramtutorial.firebaseapp.com',
	databaseURL: 'https://vuegramtutorial.firebaseio.com',
	projectId: 'vuegramtutorial',
	storageBucket: 'vuegramtutorial.appspot.com',
	messagingSenderId: '1038025512363',
	appId: '1:1038025512363:web:596ba2e615c5f351ceeeee',
	measurementId: 'G-7VBWB5L68Y',
};
firebase.initializeApp(config);
firebase.analytics();

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// date issue fix according to firebase
const settings = {
	timestampsInSnapshots: true,
};
db.settings(settings);

// firebase collections
const usersCollection = db.collection('users');
const postsCollection = db.collection('posts');
const commentsCollection = db.collection('comments');
const likesCollection = db.collection('likes');

export {
	db,
	auth,
	currentUser,
	usersCollection,
	postsCollection,
	commentsCollection,
	likesCollection,
};
