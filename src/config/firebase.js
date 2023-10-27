import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAc6LUCYfYYxBhhRqFRwokoGV3BHF6byCs",
  authDomain: "satisfyingyoumobile.firebaseapp.com",
  projectId: "satisfyingyoumobile",
  storageBucket: "satisfyingyoumobile.appspot.com",
  messagingSenderId: "959262201925",
  appId: "1:959262201925:web:dac14bb2c04e8456cd6b2c"
};

const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app);

export { auth_mod }