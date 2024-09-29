// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDUqYz3MdyzQL4dKD7_ec1009cuiYKbOM8',
	authDomain: 'apica-2-8ff3e.firebaseapp.com',
	projectId: 'apica-2-8ff3e',
	storageBucket: 'apica-2-8ff3e.appspot.com',
	messagingSenderId: '990464990970',
	appId: '1:990464990970:web:6874b656cd62030dea7343',
	measurementId: 'G-6N6BSMZEV5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
