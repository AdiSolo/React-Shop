// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKCt4j4NvZMLv3mwjEMqgOdclnlGsa2bM",
  authDomain: "react-shop-project-88f37.firebaseapp.com",
  projectId: "react-shop-project-88f37",
  storageBucket: "react-shop-project-88f37.appspot.com",
  messagingSenderId: "982239663097",
  appId: "1:982239663097:web:2f6813adba3c685fa62328",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  promt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumenFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }
  return userDocRef;
};
