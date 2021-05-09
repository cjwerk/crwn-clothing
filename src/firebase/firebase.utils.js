import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyAk60cdhE2F-inJxasxTbZ-l-nX2ySSBEo",
        authDomain: "crwm-db-882fd.firebaseapp.com",
        projectId: "crwm-db-882fd",
        storageBucket: "crwm-db-882fd.appspot.com",
        messagingSenderId: "591600534862",
        appId: "1:591600534862:web:1735d26a0e0cb2a7270a1f",
        measurementId: "G-SCDKC4E0D9"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;