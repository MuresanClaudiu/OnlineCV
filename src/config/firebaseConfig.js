// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxK1ALDxHHSNQiLM0ZND4p1jvNUGf6guY",
  authDomain: "muresan-claudiu-cv.firebaseapp.com",
  projectId: "muresan-claudiu-cv",
  storageBucket: "muresan-claudiu-cv.appspot.com",
  messagingSenderId: "701787045806",
  appId: "1:701787045806:web:3995006599894372af523f",
  measurementId: "G-90KY5QWSQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);