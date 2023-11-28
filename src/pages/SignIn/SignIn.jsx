import React from 'react';
import styles from './SignIn.module.css'

const SignIn = () => {
  return (
    <div className={styles.sign}>
      <form>
        <label>
          <h3> Username: </h3>
          <input type="text" />
        </label>
        <label>
          <h3> Password:</h3>
          <input type="password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
