import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCV-h9GKPjvfhWwsilByBoyN3O8uAWqMrw",
  authDomain: "comentaki-andre.firebaseapp.com",
  databaseURL: "https://comentaki-andre.firebaseio.com",
  projectId: "comentaki-andre",
  storageBucket: "comentaki-andre.appspot.com",
  messagingSenderId: "218605773068",
  appId: "1:218605773068:web:436dfa63dd296ffc956929"
}

firebase.initializeApp(firebaseConfig)

export default firebase