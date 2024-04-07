import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = "Place your config here!";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
