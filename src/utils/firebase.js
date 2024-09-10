// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjO5xSm9YM5IYDpUZRlLWYifpFcvsVy9E",
  authDomain: "streamhub-c664e.firebaseapp.com",
  projectId: "streamhub-c664e",
  storageBucket: "streamhub-c664e.appspot.com",
  messagingSenderId: "605048490923",
  appId: "1:605048490923:web:c05587e668cbbae8dce0ee",
  measurementId: "G-QF57P0GJPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();