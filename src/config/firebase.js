import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUWSogU014G2fcFw8RjUOC0MVWnIFimZc",
  authDomain: "mobileprojeto-f802d.firebaseapp.com",
  projectId: "mobileprojeto-f802d",
  storageBucket: "mobileprojeto-f802d.appspot.com",
  messagingSenderId: "77702819912",
  appId: "1:77702819912:web:497155a5cd19e78361a87d"
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});
const storage = getStorage(app)
const auth_mod = getAuth(app);

export { db, auth_mod, storage };