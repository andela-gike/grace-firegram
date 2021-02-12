import { firebase } from "@firebase/app";
import "firebase/storage";
import "firebase/firestore";
// var firebase = require("firebase/app");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyArtYfuh8gk2n2DSB0pSBTpUia6ka9Q8eo",
  authDomain: "grace-firegram.firebaseapp.com",
  projectId: "grace-firegram",
  storageBucket: "grace-firegram.appspot.com",
  messagingSenderId: "252226307754",
  appId: "1:252226307754:web:9af073c5c8e6b506c8f2d3"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
