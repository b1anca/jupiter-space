import React from 'react';
import AuthContext from './context';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';

const withAuthentication = (Component) => ({ firebase }) => {
  const [user, setUser] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    let unsubscribe;
    setIsLoading(true);
    const getUser = async () => {
      unsubscribe = await firebase.auth.onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
          return firebase.db.ref(`users/${firebaseUser.uid}`)
            .on('value', user => {
              setUser({ user: user.val(), firebaseUser })
              setIsLoading(false);
            })
        }

        setUser({});
      }
      )
      setIsLoading(false);
    }
    getUser();
    return () => unsubscribe()
  }, [firebase]);

  return (
    <AuthContext.Provider value={user}>
      <Component firebase={firebase} isLoading={isLoading} />
    </AuthContext.Provider>
  );
};

export default compose(withFirebase, withAuthentication);
