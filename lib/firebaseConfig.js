// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore,  } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: "G-MC6MEP0GX4"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyDlh4kbVhUvEKB8w2n77uSXZBLoFFoopF8",
  authDomain: "digital-garden-6f6b2.firebaseapp.com",
  projectId: "digital-garden-6f6b2",
  storageBucket: "digital-garden-6f6b2.appspot.com",
  messagingSenderId: "10831800105",
  appId: "1:10831800105:web:5242392b5af20f1d4f3938",
  measurementId: "G-MC6MEP0GX4"
};
  

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default app;
export {db};
