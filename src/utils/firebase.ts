import * as firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAtS2LIOaws7u94jecKqiZFAuGoS36ubx8",
  authDomain: "ruptiva-challenge-20002.firebaseapp.com",
  databaseURL: "https://ruptiva-challenge-20002.firebaseio.com",
  projectId: "ruptiva-challenge-20002",
  storageBucket: "ruptiva-challenge-20002.appspot.com",
  messagingSenderId: "921379553672",
  appId: "1:921379553672:web:ee789d5c3da48c95"
});

export const db = firebase.firestore();

// export default {
//   db
// }