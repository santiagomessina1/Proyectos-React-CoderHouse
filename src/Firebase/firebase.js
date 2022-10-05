import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBFyGoDR5FQTcrma_ULfRnYADA-XHcniOA",
  authDomain: "cloneym-de934.firebaseapp.com",
  projectId: "cloneym-de934",
  storageBucket: "cloneym-de934.appspot.com",
  messagingSenderId: "410232870889",
  appId: "1:410232870889:web:e7f8512648a8a754e71d78"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)