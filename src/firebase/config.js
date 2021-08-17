import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCGE_ujQd8mQrXawl1GIbxAhp1Eqx0XkwM',
  authDomain: 'vue-job-tracker.firebaseapp.com',
  projectId: 'vue-job-tracker',
  storageBucket: 'vue-job-tracker.appspot.com',
  messagingSenderId: '332166010707',
  appId: '1:332166010707:web:d056c5deec10499761f3a6',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
