import React from 'react';
import AuthContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = (Component) =>
  withFirebase(({ firebase }) => {
    const [user, setUser] = React.useState({})

    React.useEffect(() => {
      let unsubscribe;
      const getUser = async () => {
        unsubscribe = await firebase.auth.onAuthStateChanged((firebaseUser) =>
          firebaseUser ?
            firebase.db.ref(`users/${firebaseUser.uid}`)
              .on('value', user => setUser({ user: user.val(), firebaseUser })) :
            setUser({})
        )
      }
      getUser();
      return () => unsubscribe()
    }, [firebase]);

    return (
      <AuthContext.Provider value={user}>
        <Component firebase={firebase} />
      </AuthContext.Provider>
    );
  });

export default withAuthentication;
