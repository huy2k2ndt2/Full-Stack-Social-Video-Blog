import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDPqIkKk3xdDUEhaGWSxeSbPnFBh9qVRN8",
  authDomain: "full-stack-social-video-blog.firebaseapp.com",
  projectId: "full-stack-social-video-blog",
  storageBucket: "full-stack-social-video-blog.appspot.com",
  messagingSenderId: "489773516548",
  appId: "1:489773516548:web:97b1bc658ab8db6f5df251",
  measurementId: "G-66L8YZP0XX",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
