import React from 'react';

// import { NetworkErrorMessage } from './NetworkErrorMessage';

import styles from './Login.scss';

export const Login = ({ connectWallet, networkError, dismiss }) => {
  return (
    <>
      <div className="login">
        {/* {networkError && <NetworkErrorMessage message={networkError} dismiss={dismiss} />} */}
      </div>

      {/* <p>Connect your wallet</p>
      <button type="button" onClick={connectWallet}>
        Connect wallet
      </button> */}
    </>
  );
};

export default Login;
