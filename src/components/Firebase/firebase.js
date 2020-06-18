import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { notification } from 'antd';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  signUp = ({ email, password, displayName, role }) =>
    this.auth.createUserWithEmailAndPassword(email, password)
      .then(({ user }) =>
        this.db.ref('users/' + user.uid).set({
          name: displayName,
          email,
          role,
        }))
      .then(() => notification['success']({ message: 'Conta criada com sucesso' }))
      .catch(e => notification['error']({ message: e }));

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);


  signOut = () => {
    console.log('debug sign out');
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
    console.log(indexedDB.databases())
    // teste = () => this.auth.signOut;

    // req.onsuccess = function () {
    //     console.log("Deleted database successfully");
    // };
    // req.onerror = function () {
    //     console.log("Couldn't delete database");
    // };
    // req.onblocked = function () {
    //     console.log("Couldn't delete database due to the operation being blocked");
    // };
  }


  resetPassword = email => this.auth.sendPasswordResetEmail(email);

  updatePassword = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;