// don't store config on the client shapeInside: 


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLha1Gmi-LjWR9b89gvJPcjlxJieqN_Q0",
  authDomain: "simple-firebase-dbdf3.firebaseapp.com",
  projectId: "simple-firebase-dbdf3",
  storageBucket: "simple-firebase-dbdf3.firebasestorage.app",
  messagingSenderId: "739662428044",
  appId: "1:739662428044:web:c5d6929773011e17f9c8a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;