import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

console.log(process.env.API_KEY);

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

    // Autenticação
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => {
      console.log(`testes`)
      indexedDB.deleteDatabase('firebaseLocalStorageDb');
      console.log(indexedDB.databases())
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

    teste = () => this.auth.signOut;

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    //Database

    //exemplo\

    createQuizz = () => this.db.ref('quizzes/');

    getQuizz = () => this.db.ref(`quizzes/`);
  }
   
  export default Firebase;