// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB8k37EmrnRUThF7IvGRs5QlKqKt_i4rs",
  authDomain: "shop37-4b1df.firebaseapp.com",
  projectId: "shop37-4b1df",
  storageBucket: "shop37-4b1df.appspot.com",
  messagingSenderId: "68455443670",
  appId: "1:68455443670:web:30fcc22ea14afbdfe0ad77",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
