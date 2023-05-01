// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDty39lZqVmdspCDnTK2XllN76rtJYUSU8",
  authDomain: "chef-recipe-assign10.firebaseapp.com",
  projectId: "chef-recipe-assign10",
  storageBucket: "chef-recipe-assign10.appspot.com",
  messagingSenderId: "254099123573",
  appId: "1:254099123573:web:700b606aef874878c3b73c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}