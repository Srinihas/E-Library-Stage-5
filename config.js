import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC8LWOykx9Y5z47hmZZjh_Ezf7sv1kviVs",
  authDomain: "e-library-dccc2.firebaseapp.com",
  projectId: "e-library-dccc2",
  storageBucket: "e-library-dccc2.appspot.com",
  messagingSenderId: "888015272536",
  appId: "1:888015272536:web:837bc5f48ee3cfeddd682d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
