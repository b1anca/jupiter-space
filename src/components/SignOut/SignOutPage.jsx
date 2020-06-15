import React from 'react';
import { Button } from 'antd';


class SignOutPage extends React.Component {
      componentWillUnmount = () => {
        window.location.reload();
      }

      render () {
          return(
              <Button onClick={this.props.history.push("/")}>
                  VALEU
              </Button>
          )
      }
}


export default SignOutPage;