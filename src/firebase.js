import firebase from 'firebase/app';
// import { firebase-database} from 'firebase/database';
// import database from 'firebase/database'
require('firebase/database');

const firebaseConfig = {
  apiKey: 'AIzaSyBpvPxAVlFlB-BxY27YpeEKvvNAF4Us_YM',
  authDomain: 'visabop-29b7a.firebaseapp.com',
  databaseURL: 'https://visabop-29b7a.firebaseio.com',
  projectId: 'visabop-29b7a',
  storageBucket: 'visabop-29b7a.appspot.com',
  messagingSenderId: '69314345106',
  appId: '1:69314345106:web:572c9edf6a7b311198ce4b',
  measurementId: 'G-BLM0C8F147'
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
