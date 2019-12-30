import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDCWE9ntC4O0E6-3SSw_SGnXmftR4Nm20E",
  authDomain: "firestore-data-set-and-get.firebaseapp.com",
  databaseURL: "https://firestore-data-set-and-get.firebaseio.com",
  projectId: "firestore-data-set-and-get",
  storageBucket: "firestore-data-set-and-get.appspot.com",
  messagingSenderId: "65196521315",
  appId: "1:65196521315:web:fd04ce0267eac8f5040556",
  measurementId: "G-LPSXVK35HG"
};

  // Initialize Firebase
 const firebaseApp= firebase.initializeApp(firebaseConfig);



 const provider = new firebase.auth.FacebookAuthProvider();
export{
  firebaseApp,provider
}