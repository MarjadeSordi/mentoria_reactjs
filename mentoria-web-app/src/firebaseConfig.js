import firebase from 'firebase';

const key = process.env.REACT_APP_apiKey;
const domain = process.env.REACT_APP_authDomain;
const pId = process.env.REACT_APP_projectId;
const sBucket = process.env.REACT_APP_storadeBucket;
const mSenderId = process.env.REACT_APP_messagingSenderId;
const aId = process.env.REACT_APP_appId;
const mentId = process.env.REACT_APP_mentId;

const firebaseConfig = {
  apiKey: key,
  authDomain: domain,
  projectId: pId,
  storageBucket: sBucket,
  messagingSenderId: mSenderId,
  appId: aId,
  measurementId: mentId,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };

export default db;
