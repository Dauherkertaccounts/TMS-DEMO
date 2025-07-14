import { URLEMAILTEMPLATES } from './a_constants';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, updateEmail, updatePassword, sendPasswordResetEmail, deleteUser, reauthenticateWithCredential } from "firebase/auth";
import { getFirestore, collection, addDoc, setDoc, updateDoc, getDoc, doc, query, where, getDocs, deleteDoc, writeBatch } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
//import { onDocumentCreated, Change, FirestoreEvent} from 'firebase/functions';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc4iBH6jeeLXjhWOtQbJKDzPsQ8PU2POc",
  authDomain: "tms-demo-38c4b.firebaseapp.com",
  projectId: "tms-demo-38c4b",
  storageBucket: "tms-demo-38c4b.appspot.com",
  messagingSenderId: "227885362201",
  appId: "1:227885362201:web:89461a8d18bcee9e97ce88",
  measurementId: "G-8J6ZPS8NJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const user = auth.currentUser;

/*
exports.createuser = onDocumentCreated("users/{userId}", (event) => {
  // Get an object representing the document
  // e.g. {'name': 'Marie', 'age': 66}
  const snapshot = event.data;
  if (!snapshot) {
      console.log("No data associated with the event");
      return;
  }
  const data = snapshot.data();

  // access a particular field as you would any JS property
  const name = data.name;
  

  (async () => {
    try {
      const stored_userID = `${event.params.userID}`;
      const html = await fetch(URLEMAILTEMPLATES.URLEMAILFOLDER + URLEMAILTEMPLATES.URLREGISTER_EN)
        .then(response => response.text())
        .then(html => html.replaceAll('${fullName}', fullNameDisplay))
        .then(html => html.replace('${firstImageURL}', firstImageURL))
        .then(html => html.replace('${firstImageStyle}', firstImageStyle))
        .then(html => html.replace('${secondImageURL}', secondImageURL))
        .then(html => html.replace('${secondImageStyle}', secondImageStyle))
        .then(html => html.replaceAll('${urlEN}', (URLENV + '/en' + URLSIGNIN)))
        .then(html => html.replaceAll('${urlDE}', (URLENV + '/de' + URLSIGNIN)))
        .then(html => html.replaceAll('${userID}', stored_userID));
      const docRef = addDoc(collection(db, "mail"), {
        to: ["juan.torres@dauherkert.de"], 
        message: {
          subject: "Testing " + data.name + " : " + event.params.userID,
          html: html,
        }
      });
    } catch (error) {
      console.error(error);
    }
  })();
});
*/

// Firebase functions export

export {initializeApp,
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  updateProfile, 
  updateEmail, 
  updatePassword, 
  sendPasswordResetEmail, 
  deleteUser, 
  reauthenticateWithCredential,
  getFirestore, 
  collection, 
  addDoc, 
  setDoc, 
  updateDoc, 
  getDoc, 
  doc, 
  query, 
  where, 
  getDocs, 
  deleteDoc, 
  writeBatch,
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject,
}

// Firebase variables export

export {
  app,
  auth,
  db,
  storage,
  user
}
