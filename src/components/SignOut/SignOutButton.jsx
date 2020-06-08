import React from 'react';
import { Button } from 'antd';
import { withFirebase } from '../Firebase';
 
const SignOutButton = ( firebase, history ) => (
  <Button onClick={firebase.doSignOut} >
    Sign Out
  </Button>
);
 
export default withFirebase(SignOutButton);