import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3bk3QdkXQFtGqTQVqa1wcsPgo8x93MBw",
  authDomain: "react-messenger-92811.firebaseapp.com",
  projectId: "react-messenger-92811",
  storageBucket: "react-messenger-92811.appspot.com",
  messagingSenderId: "102761047374",
  appId: "1:102761047374:web:3eb96444aa1bbf5cf82a1f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

export default db;
