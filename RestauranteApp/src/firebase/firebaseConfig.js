import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBHgGJsIVoul3hLexZTcJflgY_rLrBpO4Y',
  authDomain: 'restaurante-react-app-8f10b.firebaseapp.com',
  databaseURL: 'https://restaurante-react-app-8f10b.firebaseio.com',
  projectId: 'restaurante-react-app-8f10b',
  storageBucket: 'restaurante-react-app-8f10b.appspot.com',
  messagingSenderId: '1064395019486',
  appId: '1:1064395019486:web:7cc694667d0c45767b5e4f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
export default firebase;
