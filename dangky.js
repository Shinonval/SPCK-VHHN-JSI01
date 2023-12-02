// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtssSGkCoCEPA8ar9YX2HcATdziOJ_MHA",
    authDomain: "sodgame.firebaseapp.com",
    projectId: "sodgame",
    storageBucket: "sodgame.appspot.com",
    messagingSenderId: "667016550191",
    appId: "1:667016550191:web:bbd3a1bb3c37d45995b3da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const login = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            localStorage.setItem("user", JSON.stringify(user));    
            alert("Login Success")
            window.location.href = "/index.html";
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            console.error(error);
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

export { auth, login };

