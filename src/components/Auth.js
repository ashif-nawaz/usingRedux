import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
import classes from './Auth.module.css';


const Auth = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  

  const dispatch = useDispatch();

  const formSubmissionHandler = (e) => {
     e.preventDefault();
     const email = emailRef.current.value;
     const password = passwordRef.current.value;
     dispatch(authActions.onLogin({ token : email + "_" + password}));
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmissionHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordRef} />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
