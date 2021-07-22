import { useEffect, useState } from 'react';
import { AUTH_LINK, CLIENT_ID, SCOPE, REDIRECT_URI } from '../../constants/authorization';

import Search from '../search/index';

const Login = () => {
  const link = `${AUTH_LINK}&client_id=${CLIENT_ID}&scope=${encodeURIComponent(SCOPE)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
  const [token, setToken] = useState(null);

  useEffect(() => {
    const params = getParams();
    const token = params.get('access_token');

    if (token) {
      setToken(token);
    }
  }, []);

  const getParams = () => {
    const hash = window.location.hash.substr(1);
    const params = new URLSearchParams(hash);
    return params;
  }

  return(
    <div>
      {
        token === null
        ? <a href={link}>Login</a>
        : <Search token={token} />
      }
    </div>
  )
};

export default Login;