// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNvVZsu-TqOFxVJNigPQAVG0fwyVzVrjg",
  authDomain: "insta-clone-27c9d.firebaseapp.com",
  projectId: "insta-clone-27c9d",
  storageBucket: "insta-clone-27c9d.appspot.com",
  messagingSenderId: "151733279037",
  appId: "1:151733279037:web:839864dd69eaf2a93ecd54"
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();

export { app, db, storage }