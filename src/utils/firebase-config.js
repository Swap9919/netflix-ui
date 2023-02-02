
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
      apiKey: "AIzaSyBgfH5nBPRfXj7l0yea0YZc3RIRMjhsIK4",
      authDomain: "react-netflix-clone-c6149.firebaseapp.com",
      projectId: "react-netflix-clone-c6149",
      storageBucket: "react-netflix-clone-c6149.appspot.com",
      messagingSenderId: "801569542857",
      appId: "1:801569542857:web:6f13bf7130b4698ddbf318"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth =getAuth(app); 