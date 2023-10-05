import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAJO7rKdykZqjBF57dBQxvU4j431DvUCtU",
  authDomain: "discord-clone-a2eba.firebaseapp.com",
  projectId: "discord-clone-a2eba",
  storageBucket: "discord-clone-a2eba.appspot.com",
  messagingSenderId: "774206831811",
  appId: "1:774206831811:web:121ed25482c4a6b7947676"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

