import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCOXWHvDz9RHlq5AyPPJeoRs3xIW3mmzhc",
    authDomain: "glob-react-task.firebaseapp.com",
    projectId: "glob-react-task",
    storageBucket: "glob-react-task.appspot.com",
    messagingSenderId: "670847835266",
    appId: "1:670847835266:web:24af98b6a27082ee6ba89b"
  };

// nastavení firebase 
firebase.initializeApp(firebaseConfig)

// nastavení služeb
const projectFirestore = firebase.firestore()

export { projectFirestore } 