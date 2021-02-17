//import * as firebase from 'firebase';
import firebase from 'firebase';
 
 require('@firebase/firestore');


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDPe3s82Ei0Qid6CynO_hKCgQqkfUz5J_M",
    authDomain: "fir-storymart-app-pro71.firebaseapp.com",
    projectId: "fir-storymart-app-pro71",
    storageBucket: "fir-storymart-app-pro71.appspot.com",
    messagingSenderId: "29650842361",
    appId: "1:29650842361:web:1c04979e720fce827a6828"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();