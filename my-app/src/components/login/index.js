import { Component } from 'react';
import { AUTH_LINK, CLIENT_ID, SCOPE, REDIRECT_URI } from '../../constants/authorization';

import Search from '../search/index';

class Login extends Component {
  constructor(props) {
    super(props);
    this.link = `${AUTH_LINK}&client_id=${CLIENT_ID}&scope=${encodeURIComponent(SCOPE)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

    this.state = {
      token: null,
    }
  }

  getParams = () => {
    const hash = window.location.hash.substr(1);
    const params = new URLSearchParams(hash);
    return params;
  }

  componentDidMount() {
    const params = this.getParams();
    const token = params.get('access_token');

    if (token) {
      this.setState({
        token
      })
    }
  }

  render() {
    const { token } = this.state;
    return(
      <div>
        {
          this.state.token === null
          ? <a href={this.link}>Login</a>
          : <Search token={token} />
        }
      </div>
    )
  }
}

export default Login;