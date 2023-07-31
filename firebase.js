import firebase from "firebase/compat/app";
import {getDatabase} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAhWlqNOukl-4CQNw0P6rQmcTYg3pJ51Lo",
  authDomain: "useeffect-project.firebaseapp.com",
  databaseURL: "https://useeffect-project-default-rtdb.firebaseio.com",
  projectId: "useeffect-project",
  storageBucket: "useeffect-project.appspot.com",
  messagingSenderId: "64945255971",
  appId: "1:64945255971:web:c9e086949b66e8bdd52396",
  measurementId: "G-CHYQ0E10G0"
    
  };
  
if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
} 

const firebase1 = getDatabase();

export{firebase1}