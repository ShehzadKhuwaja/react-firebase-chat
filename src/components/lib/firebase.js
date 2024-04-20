import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-6b152.firebaseapp.com",
  projectId: "reactchat-6b152",
  storageBucket: "reactchat-6b152.appspot.com",
  messagingSenderId: "963394365080",
  appId: "1:963394365080:web:e1bd15a2bb4b9fffb852ed"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()