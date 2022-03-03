import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCRzHCimAz0mitObVnvuxK07Fwuj1FEdg",
  authDomain: "arcival-palma.firebaseapp.com",
  databaseURL: "https://arcival-palma-default-rtdb.firebaseio.com",
  projectId: "arcival-palma",
  storageBucket: "arcival-palma.appspot.com",
  messagingSenderId: "227095641827",
  appId: "1:227095641827:web:2f363bc31e49e2d946cfd6",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

signInAnonymously(auth)
  .then(() => {
    console.log("Firebase auth signed in");
  })
  .catch((error) => {
    console.log(error);
  });

// Get a reference to the database service
export const db = getDatabase(app);
