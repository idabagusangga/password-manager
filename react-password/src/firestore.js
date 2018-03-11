import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBKrhAEGgNnDDFaA_dMFQ-S4YgKBcwNfV8",
  authDomain: "werefox-191903.firebaseapp.com",
  databaseURL: "https://werefox-191903.firebaseio.com",
  projectId: "werefox-191903",
  storageBucket: "werefox-191903.appspot.com",
  messagingSenderId: "995380116138"
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
export default db