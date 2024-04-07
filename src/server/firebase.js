import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCufMY0C-6FWeHLDbBr7ALHBhwhRnA1BK4",
  authDomain: "unicom-af6ce.firebaseapp.com",
  databaseURL: "https://unicom-af6ce-default-rtdb.firebaseio.com",
  projectId: "unicom-af6ce",
  storageBucket: "unicom-af6ce.appspot.com",
  messagingSenderId: "1074562457013",
  appId: "1:1074562457013:web:abcd8a275e93d1e17acdfc",
  measurementId: "G-Y4M8ELM6RR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
