// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { apiPass } from "./infoPriv";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiPass,
  authDomain: "tiendacurso-61b58.firebaseapp.com",
  projectId: "tiendacurso-61b58",
  storageBucket: "tiendacurso-61b58.appspot.com",
  messagingSenderId: "178039955030",
  appId: "1:178039955030:web:a17edeb25e7a59138ea5f7",
  measurementId: "G-3PQ7T9YS86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);