
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
    apiKey: "AIzaSyC1W4y0SeyPWzgH0Rk8ZnUlAMQjScqeaJU",
    authDomain: "ael-financy.firebaseapp.com",
    projectId: "ael-financy",
    storageBucket: "ael-financy.appspot.com",
    messagingSenderId: "265745497805",
    appId: "1:265745497805:web:2896700885c13ebd827384",
    measurementId: "G-449QT88Y0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
