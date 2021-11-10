import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAqdi35D0fEmiIG47_y5orCdoyc35QBFMY",
  authDomain: "auth-development-32178.firebaseapp.com",
  databaseURL: "https://auth-development-32178-default-rtdb.firebaseio.com",
  projectId: "auth-development-32178",
  storageBucket: "auth-development-32178.appspot.com",
  messagingSenderId: "259543867145",
  appId: "1:259543867145:web:7995beb4f9654224a87dd8"
};
const app = firebase.initializeApp(firebaseConfig);
export let auth = getAuth(app);
export default app