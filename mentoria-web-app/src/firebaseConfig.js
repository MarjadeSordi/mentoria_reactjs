import firebase from 'firebase';
import {
  key,
  domain,
  pId,
  sBucket,
  mSenderId,
  mentId,
  aId,
} from '../src/config';

const firebaseConfig = {
  apiKey: key,
  authDomain: domain,
  projectId: pId,
  storageBucket: sBucket,
  messagingSenderId: mSenderId,
  appId: aId,
  measurementId: mentId,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };

export { db };

export default firebase;
