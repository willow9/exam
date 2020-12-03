import firebase from "firebase/app";
import "firebase/firestore";

export const fbConfig = {
  apiKey: "AIzaSyDrrpCxIORALzZ-xN13b35DQ5AL0Brz--I",
  authDomain: "exams-3b2f1.firebaseapp.com",
  projectId: "exams-3b2f1",
  storageBucket: "exams-3b2f1.appspot.com",
  messagingSenderId: "839515114924",
  appId: "1:839515114924:web:d1d3bd96819f11555ffe09",
  measurementId: "G-NY8VGSGXHJ",
};

firebase.initializeApp(fbConfig);
firebase.firestore().settings({});
export default firebase;
