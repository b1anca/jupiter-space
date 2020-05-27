import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDIjFa77J35Dqu959fl0x1kfuCIR0lWiek",
    authDomain: "jupiter-space.firebaseapp.com",
    databaseURL: "https://jupiter-space.firebaseio.com",
    projectId: "jupiter-space",
    storageBucket: "jupiter-space.appspot.com",
    messagingSenderId: "147843933332",
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

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    //Database

    //exemplo\

    createSomething = (something) => this.db.ref(`teste/${something}`);
  }
   
  export default Firebase;