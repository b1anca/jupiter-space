import React from 'react';
import AuthContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = (Component) =>
  withFirebase(({ firebase }) => {
    const [user, setUser] = React.useState({})
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      let unsubscribe;
      setIsLoading(true);
      const getUser = async () => {
        unsubscribe = await firebase.auth.onAuthStateChanged((firebaseUser) =>
          firebaseUser ?
            firebase.db.ref(`users/${firebaseUser.uid}`)
              .on('value', user => {
                setUser({ user: user.val(), firebaseUser })
                setIsLoading(false);
              }) :
            setUser({})
        )
      }
      getUser();
      return () => unsubscribe()
    }, [firebase]);

    return (
      <AuthContext.Provider value={user}>
        <Component firebase={firebase} isLoading={isLoading} />
      </AuthContext.Provider>
    );
  });

export default withAuthentication;
