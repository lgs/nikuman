import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
const db = firebase.database()
export const usersRef = db.ref('/users')
export const postsRef = db.ref('/posts')
export default firebase
