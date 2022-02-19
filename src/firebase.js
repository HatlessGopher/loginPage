import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBNPbRr2oHnMr6LjAaGuTs3EvN30q52jYI",

  authDomain: "loginpage-5d609.firebaseapp.com",

  projectId: "loginpage-5d609",

  storageBucket: "loginpage-5d609.appspot.com",

  messagingSenderId: "1047144561039",

  appId: "1:1047144561039:web:83b07ff60e773648acf3fa"

})

export const auth = app.auth()
export default app