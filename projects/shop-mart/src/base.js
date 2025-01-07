import * as firebase from "firebase/app"
import "firebase/firestore"

import "firebase/auth"

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.SHOPMART_FIREBASE_DOMAIN,
  databaseURL: process.env.SHOPMART_FIREBASE_DATABASE,
  projectId: "shop-mart-df15a",
  storageBucket: process.env.SHOPMART_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.SHOPMART_FIREBASE_SENDER_ID,
};
//firebase.firestore().settings({ timestampsInSnapshots: true })
//const db = app.firestore().settings({ timestampsInSnapshots: true })
//export { db }
firebase.initializeApp(config)
export default firebase
